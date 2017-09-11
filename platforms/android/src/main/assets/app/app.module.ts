import { ItemDetailComponent } from './item/item-detail.component';
import { PostListComponent } from './pages/list/post.list.component';
import { PostViewComponent } from './pages/view/post.view.component';

import { ActivatedRoute, Router, Event } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import {NativeScriptHttpModule} from "nativescript-angular/http";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
//import { routes } from './routes/router';

/*import { ItemService } from "./item/item.service";
import { ItemsComponent } from "./item/items.component";
impo*/
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
    bootstrap: [
        AppComponent,
    ],
    imports: [
        NativeScriptModule,
        NativeScriptHttpModule,
        AppRoutingModule

    ],
    declarations: [
        AppComponent,
        PostListComponent,
        PostViewComponent,
        ],
    providers: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
