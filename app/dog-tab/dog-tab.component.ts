import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'my-dog-tab',
    templateUrl: './dog-tab/dog-tab.component.html'
})
export class DogTabComponent implements OnInit{

  constructor(private router: Router) {

  }

  ngOnInit() {
    // Navigate to the root of the tab
    setTimeout(() => { this.navigateToRoot() }, 0);
  }

  navigateToRoot() {
    this.router.navigate([{
      outlets: {
        dogoutlet: ['dogs']
      }
    }]);
  }
  navigateToDetails(id) {
    this.router.navigate([{
      outlets: {
        dogoutlet: ['dogs', id]
      }
    }]);
  }
}
