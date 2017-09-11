import { ActivatedRoute, Router } from '@angular/router';
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
    selector: "post-view-component",
    //moduleId: module.id,
    template: `
    <StackLayout>
    <Label text="{{title}}" class="title" textWrap="true">
    </Label>
    <Label text="{{body}}" class="body" textWrap="true">
    </Label>
    </StackLayout>
    `,
})
export class PostViewComponent  {
   // items: Item[];
   title = "";
   body="";
   public id$: Observable<string[]>;


    public post: any;
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
   constructor(private http: Http, 
            private ngZone:NgZone,
            private router: Router,
            private route: ActivatedRoute
        ) {
            this.id$ = route.params.map(r=>["id"]);
            router.events.subscribe((e)=>{
                console.log("EVENT---------->",e.toString());
            
                this.callPost( (e.url).replace("/post/","") );
            });
         }
        
         callPost(id){
             console.log(id);
            let _url = "https://jsonplaceholder.typicode.com/posts/"+id;
            console.log(_url);
            this.http.get(_url)
            .subscribe( (res:Response)=>{
                this.ngZone.run(()=>{
                   // console.log(res.json());
                    let response = res.json();
                    this.title = response.title;
                    this.body = response.body;
                })
            })

         }

}