import { createReducer, on } from "@ngrx/store";
import { DogApiActions } from "./dogApi.actions";
import { ShibaData } from "./dogApi.model";

export const initialState: ShibaData = {
  shibas: [],
  pending: false,
  error: null,
};

export const dogApiReducer = createReducer(
  initialState,
  on(DogApiActions.shibaFetchPending, (_state) => { 
    return {
    shibas: [],
    error: null,
    pending: true,
    }
  }),
  on(DogApiActions.shibaFetchSuccess, (_state, { shibas }) => { 
    return {
    shibas,
    pending: false,
    error: null,
    }
  }),
  on(DogApiActions.shibaFetchFailure, (_state, { error }) => {
    return {
    shibas: [],
    pending: false,
    error
    }
  })
);