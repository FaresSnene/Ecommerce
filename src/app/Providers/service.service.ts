import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  httpUrl = 'http://localhost:8000/api/products/';

  constructor(public http: HttpClient) {}

  createProduct(prod: any): Observable<Product> {
    return this.http.post<Product>(this.httpUrl + 'add', prod);
  }

  getProducts(): Observable<Product> {
    return this.http.get<Product>(this.httpUrl + 'view');
  }

  getProductById(id: any): Observable<Product> {
    return this.http.get<Product>(this.httpUrl + 'view/' + id);
  }

  updateProduct(prod: any, id: any): Observable<Product> {
    return this.http.put<Product>(this.httpUrl + 'edit/' + id, prod);
  }

  deleteProduct(id: any): Observable<Product> {
    return this.http.delete<Product>(this.httpUrl + 'delete/' + id);
  }

  searchProduct(src: any): Observable<Product> {
    return this.http.get<Product>(this.httpUrl + 'search/' + src);
  }
}
