import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService<T> {
  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}


  getProducts(): Observable<T[]> {
    return this.http.get<T[]>(this.apiUrl);
  }

  getProductById(id: number): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${id}`);
  }

  addProduct(entity: T): Observable<T> {
    return this.http.post<T>(this.apiUrl, entity);
  }

  updateProduct(id: number, entity: T): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}/${id}`, entity);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}