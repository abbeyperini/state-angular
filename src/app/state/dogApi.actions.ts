import { createActionGroup, emptyProps, props } from "@ngrx/store";

export const DogApiActions = createActionGroup({
  source: "Dog API",
  events: {
    "Shiba Fetch Pending": emptyProps(),
    "Shiba Fetch Success": props<{shibas: ReadonlyArray<string>}>(),
    "Shiba Fetch Failure": props<{error: string}>(),
  }
})