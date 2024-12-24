import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ExtendedProduct, Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService<T> {
  //LOCAL REQUEST
  private localAPIUrl = 'assets/data/products.json'; 
  http = inject(HttpClient)

  getProductsByType<T extends Product>(filterFn: (product: Product) => product is T): Observable<T[]> {
    return this.http.get<T[]>(this.localAPIUrl).pipe(
      map((products: Product[]) => products.filter(filterFn))
    );
  }
  
  //API REQUEST
  private apiUrl = 'https://fakestoreapi.com/products';

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