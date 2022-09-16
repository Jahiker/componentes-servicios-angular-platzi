import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  showImage = true;

  onLoaded(img: string) {
    console.log("Log Padre", img)
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }
}
