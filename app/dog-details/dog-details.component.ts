import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular';

import { DogService } from '../dog.service';

@Component({
    selector: 'my-dog-details',
    templateUrl: './dog-details/dog-details.component.html'
})
export class DogDetailsComponent implements OnInit{
  public dog: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dogService: DogService) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.dog = this.dogService.getDog(id); 
  }

  goBack() {
    this.router.navigate([
      '/home', { outlets: { dogoutlet: ['dogs'] } }
    ])
  }
}
