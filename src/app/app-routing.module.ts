import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { ProductListComponent } from "./product-list/product-list.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {SubmitformComponent} from "./submitform/submitform.component";
import { CartComponent } from "./cart/cart.component";

const routes: Routes = [
  { path: '', component: ProductListComponent},
  { path: 'cart', component: CartComponent},
  { path: 'products/:id', component: ProductDetailsComponent},
  { path: 'order/success', component: SubmitformComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
