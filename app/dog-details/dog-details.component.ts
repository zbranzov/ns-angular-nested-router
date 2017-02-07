import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { DogService } from '../dog.service';

@Component({
    selector: 'my-dog-details',
    templateUrl: './dog-details/dog-details.component.html'
})
export class DogDetailsComponent implements OnInit{
  dog: any;

  constructor(private route: ActivatedRoute, private dogService: DogService) { }

  ngOnInit() {
    const id = +this.route.snapshot.params["id"];

    this.dog = this.dogService.getDog(id); 
  }
}
