"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import type { ReactNode } from "react";
import type { SpiceLevel } from "./menu";

export interface CartLine {
  /** unique per item + size + spice combination */
  key: string;
  itemId: string;
  itemName: string;
  sizeLabel: string;
  spice?: SpiceLevel;
  unitPriceNaira: number;
  qty: number;
}

interface CartState {
  lines: CartLine[];
  /** becomes true once we've read localStorage, so we don't flash an
   *  empty cart before hydration finishes */
  ready: boolean;
}

type CartAction =
  | { type: "hydrate"; lines: CartLine[] }
  | { type: "add"; line: Omit<CartLine, "qty">; qty: number }
  | { type: "setQty"; key: string; qty: number }
  | { type: "remove"; key: string }
  | { type: "clear" };

function reducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "hydrate":
      return { lines: action.lines, ready: true };
    case "add": {
      const existing = state.lines.find((l) => l.key === action.line.key);
      if (existing) {
        return {
          ...state,
          lines: state.lines.map((l) =>
            l.key === action.line.key ? { ...l, qty: l.qty + action.qty } : l
          ),
        };
      }
      return {
        ...state,
        lines: [...state.lines, { ...action.line, qty: action.qty }],
      };
    }
    case "setQty":
      if (action.qty <= 0) {
        return { ...state, lines: state.lines.filter((l) => l.key !== action.key) };
      }
      return {
        ...state,
        lines: state.lines.map((l) =>
          l.key === action.key ? { ...l, qty: action.qty } : l
        ),
      };
    case "remove":
      return { ...state, lines: state.lines.filter((l) => l.key !== action.key) };
    case "clear":
      return { ...state, lines: [] };
    default:
      return state;
  }
}

const STORAGE_KEY = "akankeolofada.cart.v1";

interface CartContextValue {
  lines: CartLine[];
  ready: boolean;
  itemCount: number;
  subtotal: number;
  add: (line: Omit<CartLine, "qty">, qty: number) => void;
  setQty: (key: string, qty: number) => void;
  remove: (key: string) => void;
  clear: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { lines: [], ready: false });

  // Hydrate from localStorage once, after mount, to avoid SSR mismatch.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      dispatch({ type: "hydrate", lines: raw ? JSON.parse(raw) : [] });
    } catch {
      dispatch({ type: "hydrate", lines: [] });
    }
  }, []);

  useEffect(() => {
    if (!state.ready) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.lines));
    } catch {
      // storage unavailable — cart just won't persist across visits
    }
  }, [state.lines, state.ready]);

  const value = useMemo<CartContextValue>(() => {
    const itemCount = state.lines.reduce((sum, l) => sum + l.qty, 0);
    const subtotal = state.lines.reduce(
      (sum, l) => sum + l.qty * l.unitPriceNaira,
      0
    );
    return {
      lines: state.lines,
      ready: state.ready,
      itemCount,
      subtotal,
      add: (line, qty) => dispatch({ type: "add", line, qty }),
      setQty: (key, qty) => dispatch({ type: "setQty", key, qty }),
      remove: (key) => dispatch({ type: "remove", key }),
      clear: () => dispatch({ type: "clear" }),
    };
  }, [state]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
