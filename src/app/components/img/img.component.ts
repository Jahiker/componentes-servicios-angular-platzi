import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})

export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  @Input() img: string = ''
  @Output() loadedOuput = new EventEmitter<string>();

  imageDefault = "./assets/images/default.png";

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
  }

  ngOnInit(): void {
    // Run before render
    // Async proccess
    // Run just once
    console.log("ngOnInit", "🚀ImgValue=>",this.img)
  }

  ngAfterViewInit(): void {
    // Run after render
    // Handle childrens
    console.log("ngAfterViewInit", "🚀ImgValue=>",this.img)
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy", "🚀ImgValue=>",this.img)
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log("Log Hijo")
    this.loadedOuput.emit(this.img);
  }

}
