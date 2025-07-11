import { createAction, props } from "@ngrx/store";

export const incrementByAmount = createAction("Increment by Amount", props<{ number: number }>())