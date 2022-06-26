import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import {Product} from "../models/Porduct";
import {User} from "../models/User";
import {Order} from "../models/Order";
import {CartService} from "../services/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  name: string = "";
  address: string = "";
  card: string = "";
  user:User =  new User()
  order: Order = new Order();
  products: Observable<Product[]> = new Observable<Product[]>();
  total: Observable<number> = new Observable<number>();

  constructor( private cart: CartService, private router: Router) {}

  ngOnInit(): void {
    this.products = this.cart.allProducts
    this.total = this.cart.total;
  }
  orderSubmit(): void{
    // if(this.name == '' || this.address == '' || this.card == ''){
    //   return
    // }
    this.user.name = this.name
    this.user.address = this.address
    this.user.card = this.card
    this.order.user = this.user
    this.cart.saveOrder(this.order)
    this.router.navigateByUrl("order/success")
  }
}
