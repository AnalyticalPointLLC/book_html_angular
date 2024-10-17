import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LecturaService {
  private baseUrl = environment.mylectura;
  private promocionDiario = '/bmg_books/promocion_diaria';
  private bmgbookid = '/bmg_books/book';
  private bmgBooksClassification =
    '/bmg_books/classifications/books/A/language/Español'; // Nueva propiedad
  private filterclasificacionIdioma = '/bmg_books/classifications/books';
  private Searchtituloidioma = '/bmg_books/search_by_language_and_title';

  constructor(private http: HttpClient) {}
  getPromocionDiario(): Observable<any> {
    return this.http.get(
      this.baseUrl + this.promocionDiario + '?idioma=español&limit=100&offset=0'
    );
  }

  getbmgbookid(idarti: string): Observable<any> {
    return this.http.get(this.baseUrl + this.bmgbookid + '/' + idarti);
  }

  getBooksClassification(): Observable<any> {
    // Nuevo método
    return this.http.get(
      this.baseUrl + this.bmgBooksClassification + '?limit=100&offset=0'
    );
  }
  getfilterclasificacionIdioma(
    idioma: string,
    clasificacion: string
  ): Observable<any> {
    // Nuevo método
    return this.http.get(
      this.baseUrl +
        this.filterclasificacionIdioma +
        '/' +
        clasificacion +
        '/language/' +
        idioma +
        '?limit=100&offset=0'
    );
  }
  getSearchtituloidioma(idioma: string, titulo: string): Observable<any> {
    // Nuevo método
    return this.http.get(
      this.baseUrl +
        this.Searchtituloidioma +
        '?idioma=' +
        idioma +
        '&titulo=' +
        titulo +
        '&limit=100&offset=0'
    );
  }
}
