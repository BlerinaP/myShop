import { Component, OnInit } from '@angular/core';
import {Product} from "../models/Porduct";
import {ProductsService} from "../services/products.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  productAdded: boolean = false;
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
      this.productService.getProducts().subscribe(res => {
        for(let index = 0; index < res.length; index++){
          const product = res[index];
          product["quantity"] = 0;
        }
        this.products = res;
      })
  }

}
