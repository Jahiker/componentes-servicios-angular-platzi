import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})

export class ImgComponent implements OnInit {

  @Input() img: string = ''
  @Output() loadedOuput = new EventEmitter<string>();

  imageDefault = "./assets/images/default.png";

  constructor() { }

  ngOnInit(): void {
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log("Log Hijo")
    this.loadedOuput.emit(this.img);
  }

}
