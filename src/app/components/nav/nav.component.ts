import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnChanges {
  total: number = 0;
  constructor(
    private storeService: StoreService
  ) {
    this.total = this.storeService.getTotal();
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.total = this.storeService.getTotal();
  }

  activeMenu = false;

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

}
