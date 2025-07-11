import { createReducer, on } from "@ngrx/store";
import { incrementByAmount } from "./shibas.actions";

export const initialState = { count: 0 };

export const shibasReducer = createReducer(
  initialState,
  on(incrementByAmount, (state, { number }) => {
    return { count: state.count + number }
  })
);