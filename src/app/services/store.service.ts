import { Injectable } from '@angular/core';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})

export class StoreService {

  constructor() { }

  private myShoppingCart: Product[] = [];

  total: number = 0;

  addProduct(product: Product) {
    this.myShoppingCart.push(product);
  }

  getShoppingCart() {
    return this.myShoppingCart;
  }

  getTotal() {
    return this.total =  this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  }

}