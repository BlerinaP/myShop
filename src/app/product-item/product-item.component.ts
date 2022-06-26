import { Component, OnInit, Input } from '@angular/core';
import {Product} from "../models/Porduct";
import {CartService} from "../services/cart.service";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  quantity: number = 1
  @Input() product: Product;

  constructor(private cart: CartService) {
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
  
  }

  setQuantity(e: Event): void{
    this.quantity = parseInt((e.target as HTMLSelectElement).value);
  }

  addToCart(): void{
    this.cart.addToCart(this.product, this.quantity)
  }

}
