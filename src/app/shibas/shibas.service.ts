import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// @Injectable({ providedIn: 'root' })
// export class ShibasService {
//   constructor(private http: HttpClient) {}

//   getShibas(count: number): Observable<Array<string>> {
//     return this.http
//       .get<Response & { data: string[] }>(
//         `https://dog.ceo/api/breed/shiba/images/random/${count}`
//       )
//       .pipe(map((response) => response.data || []));
//   }
// }