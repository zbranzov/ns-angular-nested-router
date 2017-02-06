import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
    selector: 'my-home',
    templateUrl: './home/home.component.html'
})
export class HomeComponent implements OnInit{
  selectedIndex = 0;
  
  constructor(private router: Router) {

  }

  ngOnInit() {

  }

  navigateToDogs() {
    debugger;
    this.router.navigate([{ outlets: { dogoutlet: ['dogs'] } }]);
  }
  navigateToDogDetails() {
    debugger;
    this.router.navigate(['/', { outlets: { dogoutlet: ['dogdetails'] } }]);
  }
}
