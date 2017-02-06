import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { ItemService } from "./item/item.service";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

import { HomeComponent } from './home/home.component';
import { DogsComponent } from './dogs/dogs.component';
import { DogDetailsComponent } from './dog-details/dog-details.component';
import { CatsComponent } from './cats/cats.component';
import { CatDetailsComponent } from './cat-details/cat-details.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        DogsComponent,
        DogDetailsComponent,
        CatsComponent,
        CatDetailsComponent
    ],
    providers: [
        ItemService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
