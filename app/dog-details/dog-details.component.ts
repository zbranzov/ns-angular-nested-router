import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'my-dog-details',
    templateUrl: './dog-details/dog-details.component.html'
})
export class DogDetailsComponent implements OnInit{
  id: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params["id"];
  }
}
