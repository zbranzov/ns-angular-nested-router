import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DogService } from '../dog.service';

@Component({
    selector: 'my-dogs',
    templateUrl: './dogs/dogs.component.html'
})
export class DogsComponent implements OnInit{

  public dogs: Array<any>;

  constructor(private router: Router, private dogService: DogService) {

  }

  ngOnInit() {
    this.dogs = this.dogService.getDogs();
  }

  navigateToRoot() {
    this.router.navigate([
      '/home', 
      { outlets: { dogoutlet: ['dogs'] }
    }]);
  }
  navigateToDetails(id) {
    this.router.navigate([
      '/home', 
      { outlets: { dogoutlet: ['dogs', id] }
    }]);
  }
}
