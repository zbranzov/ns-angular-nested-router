import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'my-cat-details',
    templateUrl: './cat-details/cat-details.component.html'
})
export class CatDetailsComponent implements OnInit{
  id: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params["id"];
  }
}
