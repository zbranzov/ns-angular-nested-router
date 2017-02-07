import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'my-cat-tab',
    templateUrl: './cat-tab/cat-tab.component.html'
})
export class CatTabComponent implements OnInit{

  constructor(private router: Router) {

  }

  ngOnInit() {
    // Navigate to the root of the tab
    setTimeout(() => { this.navigateToRoot() }, 0);
  }

  navigateToRoot() {
    this.router.navigate([{ 
      outlets: {
        catoutlet: ['cats']
      }
    }]);
  }
  
  navigateToDetails(id) {
    this.router.navigate([{ 
      outlets: { 
        catoutlet: ['cats', id] 
      } 
    }]);
  }
}
