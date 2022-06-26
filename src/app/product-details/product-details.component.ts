import { Component, OnInit } from '@angular/core';
import {Product} from "../models/Porduct";
import {ProductsService} from "../services/products.service";
import {CartService} from "../services/cart.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  products: Product[] = [];
  quantity: number  =  1
  product: Product

  constructor(private productService: ProductsService, private route: ActivatedRoute, private cart: CartService) {
    this.product = {
      id: 1,
      name: '',
      price: 1,
      url: '',
      description: '',
      quantity: 1
    }
  }

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id') || 1
    this.productService.getProducts().subscribe(res => {
      this.products = res;
      this.product = this.products.find(item => item.id == productId) || this.product
    })
  }

}
