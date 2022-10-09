import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})

export class StoreService {

  constructor() { }

  private myShoppingCart: Product[] = [];
  private myCart = new BehaviorSubject<Product[]>([]);

  myCart$ = this.myCart.asObservable();

  total: number = 0;

  addProduct(product: Product) {
    this.myShoppingCart.push(product);
    this.myCart.next(this.myShoppingCart);
  }

  getShoppingCart() {
    return this.myShoppingCart;
  }

  getTotal() {
    return this.total =  this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  }

}
