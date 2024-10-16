import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LecturaService {
  private baseUrl = environment.mylectura;
  private promocionDiario = '/bmg_books/promocion_diaria';
  private bmgbookid = '/bmg_books/book';
  private bmgBooksClassification = '/bmg_books/classifications/books/A/language/Español'; // Nueva propiedad


  constructor(private http: HttpClient) {}
  getPromocionDiario(): Observable<any> {
    return this.http.get(
      this.baseUrl + this.promocionDiario + '?idioma=español&limit=100&offset=0'
    );
  }

  getbmgbookid(idarti: string): Observable<any> {
    return this.http.get(this.baseUrl + this.bmgbookid + '/' + idarti);
  }

  getBooksClassification(): Observable<any> {  // Nuevo método
    return this.http.get(this.baseUrl + this.bmgBooksClassification + '?limit=100&offset=0');
  }
}





