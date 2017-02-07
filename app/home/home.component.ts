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
    // setTimeout(() => { this.navigateToRoots() }, 0);
  }

  navigateToRoots() {
    this.router.navigate([{ 
      outlets: { 
        dogoutlet: ['dogs'],
        catoutlet: ['cats'] 
      } 
    }])
  }

}
