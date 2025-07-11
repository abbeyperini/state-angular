// import { inject } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { of } from 'rxjs';
// import { map, exhaustMap, catchError } from 'rxjs/operators';
// import { ShibasService } from './shibas.service';
// import { DogApiActions } from '../state/shibas.actions';
// import { ShibaActions } from '../state/shibas.actions';

// export const getShibas = createEffect(
//   (actions$ = inject(Actions), shibasService = inject(ShibasService)) => {
//     return actions$.pipe(
//       ofType(ShibaActions.incrementByAmount),
//       exhaustMap((action) =>
//         shibasService.getShibas(action.number).pipe(
//           map((shibas) => DogApiActions.shibaFetchSuccess({ shibas })),
//           catchError((error: { message: string }) =>
//             of(DogApiActions.shibaFetchFailure({ error: error.message }))
//           )
//         )
//       )
//     );
//   },
//   { functional: true }
// );
