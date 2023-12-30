import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class InscriptionService {
  private baseUrl = 'http://localhost:3000/api/v1/users';

  constructor(private http: HttpClient) {}

  register(username: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/post`;
    const body = { username, password };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Ajoutez d'autres en-têtes si nécessaire
    });

    return this.http.post(url, body, { headers, withCredentials: true }).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error during registration:', error);

        if (error.status === 0 && error.error instanceof ProgressEvent) {
          return throwError('CORS Error: Unable to connect to the server.');
        }

        return throwError('Server Error: ' + error.status);
      })
    );
  }
}

