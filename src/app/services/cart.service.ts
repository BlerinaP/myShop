import { Injectable } from '@angular/core';
import {Product} from "../models/Porduct";
import {Order} from "../models/Order";
import { BehaviorSubject } from "rxjs";
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Product[] = [];
  allProducts = new BehaviorSubject<Product[]>([]);
  total: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  count = new BehaviorSubject<number>(0);
  order = new Order()
  constructor(private NotificationService: NotificationService) { }

  addToCart(product: Product, quantity: number){
    this.NotificationService.showSuccess("New item added to the cart")
     let exists: Product | undefined = this.products.find(p => p.id == product.id)
      if(exists){
        exists.quantity += quantity;
      } else {
        product.quantity += quantity;
        this.products.push(product)
      }
      this.allProducts.next(this.products);
      this.total.next(this.getTotalSum())
  }
  getTotalSum():number{
    let sum = 0;
    this.products.forEach(prod => sum += prod.quantity * prod.price)
    return sum
  }
  getOrder(): Order{
    return this.order
  }

  saveOrder(order:Order){
    this.order = order
  }

  remove(product: Product){
    product.quantity = 0;
    this.products = this.products.filter(prod => prod !== product)
    this.allProducts.next(this.products);
    this.total.next(this.getTotalSum())
  }
}
