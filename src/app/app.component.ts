import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  showImage = true;
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

  onLoaded(img: string) {
    console.log("Log Padre", img)
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }
}
