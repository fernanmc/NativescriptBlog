import { Component, OnInit, NgZone } from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

/*@Component({
    selector: 'my-app',
    template:`<label text="Listado" class="title"></label>`
})

export class PostListComponent { }
*/

@Component({
    selector: "ns-items",
    //moduleId: module.id,
    template: `
    <StackLayout>
    <image src="https://davidhernandez.es/wp-content/uploads/2011/08/logo.gif"></image>
    <Label text="Listado" class="title"></Label>
    <ListView [items]="posts">
        <template let-item="item" let-i="index" let-odd="odd" let-even="even">
        <Label [nsRouterLink]="['/post/', item.id]" class="listado" [class.odd] [class.even]="even" [text]='item.id+":"+item.title'>
        </Label>
        </template>
    </ListView>
    </StackLayout>
    `,
})
export class PostListComponent implements OnInit {
   // items: Item[];
    public posts: any;
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
   constructor(private http: Http, private ngZone:NgZone) { }

    ngOnInit(): void {
        let _url = "https://jsonplaceholder.typicode.com/posts/";

        this.http.get(_url)
        .subscribe( (res:Response)=>{
            this.ngZone.run(()=>{
               // console.log(res.json());
                this.posts = res.json();
            })
        })
      
    }
}