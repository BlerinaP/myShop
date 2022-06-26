import { Component, OnInit } from '@angular/core';
import {Order} from "../models/Order";
import {CartService} from "../services/cart.service";

@Component({
  selector: 'app-submitform',
  templateUrl: './submitform.component.html',
  styleUrls: ['./submitform.component.css']
})
export class SubmitformComponent implements OnInit {
  order: Order = new Order()
  total: number = 0
  constructor(private cart: CartService) { }

  ngOnInit(): void {
    this.order = this.cart.getOrder();
    this.total = this.cart.getTotalSum()
  }

}
