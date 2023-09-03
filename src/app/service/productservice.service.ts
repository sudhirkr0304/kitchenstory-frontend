import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/admin';

  constructor(private http: HttpClient) { }




  getAllProducts() {
    return this.http.get(`${this.baseUrl}/getallproducts`);
  }

  addproduct(body : any) {
    return this.http.post(`${this.baseUrl}/addproduct`,body)
  }

  deleteproduct(id:any) {
    return this.http.delete(`${this.baseUrl}/deleteproduct?id=${id}`);
  }

}
