import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DogService } from '../dog.service';
import { RadListViewComponent } from "nativescript-ui-listview/angular";
import { isIOS } from 'tns-core-modules/platform/platform';
import { ListViewEventData, RadListView, ListViewItemSnapMode } from 'nativescript-ui-listview';
import { EventData } from "tns-core-modules/data/observable";

@Component({
  selector: 'my-dogs',
  templateUrl: './dogs/dogs.component.html'
})
export class DogsComponent {
  public dogs: Array<any>;
  public scrollOffset: number;
  public lastIndex: number;
  private timer;
  @ViewChild("list") _listRef: RadListViewComponent;

  constructor(private router: Router, private dogService: DogService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.dogs = this.dogService.getDogs();
    let returnTo;
    this.route.queryParams.subscribe(
      params => returnTo = params['returnTo']);
    if (returnTo) {
      this.scrollOffset = returnTo;
    }


    if(this.scrollOffset){

      setTimeout(() => {
        this._listRef.nativeElement.scrollWithAmount(this.scrollOffset, false);

        setTimeout(() => {
          console.log(`post offset: ${this._listRef.nativeElement.getScrollOffset()}`);
        },10);
      },10);
    }
  }

  navigateToDetails(id) {
    this.scrollOffset = this._listRef.nativeElement.getScrollOffset();
    this.router.navigate([
      '/home', { outlets: { dogoutlet: ['dogs', id] } }
    ], { queryParams: { returnTo: this.scrollOffset } })
  }

  private scrollFunc(listView: RadListView, that) {
    // listView.scrollToIndex(20, false, ListViewItemSnapMode.Start);

    if (that.lastIndex) {
      console.log("will scroll with ", that.lastIndex);
      // setTimeout(() => {
      // that._listRef.nativeElement.scrollWithAmount(that.scrollOffset, false);
      listView.scrollToIndex(parseInt(that.lastIndex), false, ListViewItemSnapMode.Center);

    }
  }

  public onDataPopulated(args: EventData) {
    console.log("on populated");
    const listView = args.object as RadListView;
    // Uses "setTimeout()" to only execute scrollToIndex when the RadListView on iOS has finished populating its native objects
    if (isIOS) {
      if (this.timer) {
        clearTimeout(this.timer);
      }

      this.timer = setTimeout(this.scrollFunc, 10, listView, this);
    } else {
      this.scrollFunc(listView, this);
    }
  }
}