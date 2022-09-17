import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myShoppingCart: Product[] = [];

  total: number = 0;

  products: Product[] = [
    {
      id: '1',
      name: 'Album',
      image: './assets/images/album.jpg',
      price: 100
    },
    {
      id: '2',
      name: 'Bike',
      image: './assets/images/bike.jpg',
      price: 100
    },
    {
      id: '3',
      name: 'Books',
      image: './assets/images/books.jpg',
      price: 100
    },
    {
      id: '4',
      name: 'Glasses',
      image: './assets/images/glasses.jpg',
      price: 100
    },
    {
      id: '5',
      name: 'Hose',
      image: './assets/images/house.jpg',
      price: 100
    },
    {
      id: '6',
      name: 'Toy',
      image: './assets/images/toy.jpg',
      price: 100
    }
  ]

  onAddToShoppingCart(product: Product) {
    this.myShoppingCart.push(product);
    console.log("myShoppingCart:", this.myShoppingCart)
    this.total =  this.myShoppingCart.reduce((sum, item) => sum + item.price, 0)
  }

}
