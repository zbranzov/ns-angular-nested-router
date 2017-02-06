import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

import { HomeComponent } from './home/home.component';
import { DogsComponent } from './dogs/dogs.component';
import { DogDetailsComponent } from './dog-details/dog-details.component';
import { CatsComponent } from './cats/cats.component';
import { CatDetailsComponent } from './cat-details/cat-details.component';

const routes: Routes = [
    // { path: "", redirectTo: "/items", pathMatch: "full" },
    { path: "", component: HomeComponent, children: [
        { path: 'dogs', component: DogsComponent, outlet: 'dogoutlet' },

    ] },
    { path: 'dogdetails', component: DogDetailsComponent, outlet: 'dogoutlet' },
    { path: "cats", children: [
        { path: '', component: CatsComponent, outlet: 'catoutlet' },
        { path: ':id', component: CatDetailsComponent, outlet: 'catoutlet' }
    ]}

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }