import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements {
  constructor() { }

  @Input() product: Product = {
    id: '',
    price: 0,
    image: '',
    title: '',
    description: '',
    category: ''
  }

  @Output() addedProduct = new EventEmitter<Product>()

  onAddToCart() {
    this.addedProduct.emit(this.product);
  }
}
