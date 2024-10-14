import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://api-lectura-python.analyticalpoint.com/bmg_books/promocion_diaria?idioma=Espa%C3%B1ol&limit=100&offset=0';
  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(response => response.map(product => ({
        id: product.id,
        title: product.titulo,
        imageUrl: product.imagen_tapa
      })))
    );
  }
}
