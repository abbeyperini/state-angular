import { createActionGroup, createAction, emptyProps, props } from "@ngrx/store";

export const incrementByAmount = createAction("Increment by Amount", props<{ number: number }>())

// export const DogApiActions = createActionGroup({
//   source: "Dog API",
//   events: {
//     "Shiba Fetch Pending": emptyProps(),
//     "Shiba Fetch Success": props<{shibas: ReadonlyArray<string>}>(),
//     "Shiba Fetch Failure": props<{error: string}>(),
//   }
// })