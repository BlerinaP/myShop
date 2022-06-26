import { Injectable } from '@angular/core';
import {Product} from "../models/Porduct";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  getProducts(): Observable<Product[]>{
      return this.http.get<Product[]>("http://localhost:4200/assets/data.json")
  }
}
