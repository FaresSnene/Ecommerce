import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  url = 'http://localhost:3000/elec';
  httpheader = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
    }),
  };
  constructor(public http: HttpClient) {}

  getAll() {
    return this.http.get(this.url, this.httpheader);
  }
}
