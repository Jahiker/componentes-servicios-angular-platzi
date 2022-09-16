import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, AfterViewInit, OnDestroy, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})

export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  img: string = '';

  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
    console.log("change just image =>", this.img);
  }
  @Input() alt: string = ''

  @Output() loadedOuput = new EventEmitter<string>();

  imageDefault = "./assets/images/default.png";
  counter = 0;
  counterFn: number | undefined;

  constructor() {
    // Run before render
    // Run just once
    // No Async process
    console.log("constructor", "🚀ImgValue=>",this.img)
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Run before and during render
    // Inputs changes
    // Run any times as is neccesary
    console.log("ngOnChanges", "🚀ImgValue=>",this.img)
    console.log("changes", changes);
  }

  ngOnInit(): void {
    // Run before render
    // Async proccess
    // Run just once
    console.log("ngOnInit", "🚀ImgValue=>",this.img);

    // this.counterFn = window.setInterval(() => {
    //   this.counter += 1;
    //   console.log("run counter", this.counter);
    // }, 1000)
  }

  ngAfterViewInit(): void {
    // Run after render
    // Handle childrens
    console.log("ngAfterViewInit", "🚀ImgValue=>",this.img)
  }

  ngOnDestroy(): void {
    // Run on delete component
    console.log("ngOnDestroy", "🚀ImgValue=>",this.img)
    window.clearInterval(this.counterFn);
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log("Log Hijo")
    this.loadedOuput.emit(this.img);
  }

}
