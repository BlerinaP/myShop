import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../models/Porduct";
import {CartService} from "../services/cart.service";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() product: Product = new Product()
  @Output() removeItemFromCart: EventEmitter<Product> = new EventEmitter()
  constructor(private cart: CartService) { }

  ngOnInit(): void {
  }
  changeTotal(e: Event): void {
    const input = e.target as HTMLInputElement
    const val = parseInt(input.value)

    if (val && Math.abs(val) > 0) {
      input.value = Math.abs(val).toString()
    } else {
      input.value = "1"
    }
    this.product.quantity = parseInt(input.value);
    this.cart.total.next(this.cart.getTotalSum());
  }
  removeItem(e: Event):void{
    this.removeItemFromCart.emit(this.product);
    this.cart.remove(this.product)
  }
}
