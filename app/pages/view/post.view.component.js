"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
/*@Component({
    selector: 'my-app',
    template:`<label text="Listado" class="title"></label>`
})

export class PostListComponent { }
*/
var PostViewComponent = (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function PostViewComponent(http, ngZone, router, route) {
        var _this = this;
        this.http = http;
        this.ngZone = ngZone;
        this.router = router;
        this.route = route;
        // items: Item[];
        this.title = "";
        this.body = "";
        this.id$ = route.params.map(function (r) { return ["id"]; });
        router.events.subscribe(function (e) {
            console.log("EVENT---------->", e.toString());
            _this.callPost((e.url).replace("/post/", ""));
        });
    }
    PostViewComponent.prototype.callPost = function (id) {
        var _this = this;
        console.log(id);
        var _url = "https://jsonplaceholder.typicode.com/posts/" + id;
        console.log(_url);
        this.http.get(_url)
            .subscribe(function (res) {
            _this.ngZone.run(function () {
                // console.log(res.json());
                var response = res.json();
                _this.title = response.title;
                _this.body = response.body;
            });
        });
    };
    PostViewComponent = __decorate([
        core_1.Component({
            selector: "post-view-component",
            //moduleId: module.id,
            template: "\n    <StackLayout>\n    <Label text=\"{{title}}\" class=\"title\" textWrap=\"true\">\n    </Label>\n    <Label text=\"{{body}}\" class=\"body\" textWrap=\"true\">\n    </Label>\n    </StackLayout>\n    ",
        }),
        __metadata("design:paramtypes", [http_1.Http,
            core_1.NgZone,
            router_1.Router,
            router_1.ActivatedRoute])
    ], PostViewComponent);
    return PostViewComponent;
}());
exports.PostViewComponent = PostViewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC52aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBvc3Qudmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwQ0FBeUQ7QUFDekQsc0NBQTBEO0FBQzFELHNDQUFzRTtBQUV0RSxnQ0FBOEI7QUFDOUIsaUNBQStCO0FBRS9COzs7Ozs7RUFNRTtBQWNGO0lBUUksNklBQTZJO0lBQzdJLGlIQUFpSDtJQUNsSCwyQkFBb0IsSUFBVSxFQUNiLE1BQWEsRUFDYixNQUFjLEVBQ2QsS0FBcUI7UUFIdEMsaUJBV087UUFYYSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ2IsV0FBTSxHQUFOLE1BQU0sQ0FBTztRQUNiLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQVp0QyxpQkFBaUI7UUFDakIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLFNBQUksR0FBQyxFQUFFLENBQUM7UUFZQyxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFFLE9BQUEsQ0FBQyxJQUFJLENBQUMsRUFBTixDQUFNLENBQUMsQ0FBQztRQUN2QyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFDLENBQUM7WUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUU3QyxLQUFJLENBQUMsUUFBUSxDQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUMsRUFBRSxDQUFDLENBQUUsQ0FBQztRQUNsRCxDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7SUFFRCxvQ0FBUSxHQUFSLFVBQVMsRUFBRTtRQUFYLGlCQWNDO1FBYkcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLElBQUksR0FBRyw2Q0FBNkMsR0FBQyxFQUFFLENBQUM7UUFDNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7YUFDbEIsU0FBUyxDQUFFLFVBQUMsR0FBWTtZQUNyQixLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDYiwyQkFBMkI7Z0JBQzFCLElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDMUIsS0FBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO2dCQUM1QixLQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDOUIsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQTtJQUVMLENBQUM7SUFyQ0csaUJBQWlCO1FBWjdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLHNCQUFzQjtZQUN0QixRQUFRLEVBQUUsNk1BT1Q7U0FDSixDQUFDO3lDQVcyQixXQUFJO1lBQ04sYUFBTTtZQUNMLGVBQU07WUFDUCx1QkFBYztPQWI1QixpQkFBaUIsQ0F1QzdCO0lBQUQsd0JBQUM7Q0FBQSxBQXZDRCxJQXVDQztBQXZDWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE5nWm9uZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7SHR0cCwgUmVzcG9uc2UsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5cclxuLypAQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcclxuICAgIHRlbXBsYXRlOmA8bGFiZWwgdGV4dD1cIkxpc3RhZG9cIiBjbGFzcz1cInRpdGxlXCI+PC9sYWJlbD5gXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUG9zdExpc3RDb21wb25lbnQgeyB9XHJcbiovXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcInBvc3Qtdmlldy1jb21wb25lbnRcIixcclxuICAgIC8vbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8U3RhY2tMYXlvdXQ+XHJcbiAgICA8TGFiZWwgdGV4dD1cInt7dGl0bGV9fVwiIGNsYXNzPVwidGl0bGVcIiB0ZXh0V3JhcD1cInRydWVcIj5cclxuICAgIDwvTGFiZWw+XHJcbiAgICA8TGFiZWwgdGV4dD1cInt7Ym9keX19XCIgY2xhc3M9XCJib2R5XCIgdGV4dFdyYXA9XCJ0cnVlXCI+XHJcbiAgICA8L0xhYmVsPlxyXG4gICAgPC9TdGFja0xheW91dD5cclxuICAgIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb3N0Vmlld0NvbXBvbmVudCAge1xyXG4gICAvLyBpdGVtczogSXRlbVtdO1xyXG4gICB0aXRsZSA9IFwiXCI7XHJcbiAgIGJvZHk9XCJcIjtcclxuICAgcHVibGljIGlkJDogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XHJcblxyXG5cclxuICAgIHB1YmxpYyBwb3N0OiBhbnk7XHJcbiAgICAvLyBUaGlzIHBhdHRlcm4gbWFrZXMgdXNlIG9mIEFuZ3VsYXLigJlzIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGltcGxlbWVudGF0aW9uIHRvIGluamVjdCBhbiBpbnN0YW5jZSBvZiB0aGUgSXRlbVNlcnZpY2Ugc2VydmljZSBpbnRvIHRoaXMgY2xhc3MuIFxyXG4gICAgLy8gQW5ndWxhciBrbm93cyBhYm91dCB0aGlzIHNlcnZpY2UgYmVjYXVzZSBpdCBpcyBpbmNsdWRlZCBpbiB5b3VyIGFwcOKAmXMgbWFpbiBOZ01vZHVsZSwgZGVmaW5lZCBpbiBhcHAubW9kdWxlLnRzLlxyXG4gICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHAsIFxyXG4gICAgICAgICAgICBwcml2YXRlIG5nWm9uZTpOZ1pvbmUsXHJcbiAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWQkID0gcm91dGUucGFyYW1zLm1hcChyPT5bXCJpZFwiXSk7XHJcbiAgICAgICAgICAgIHJvdXRlci5ldmVudHMuc3Vic2NyaWJlKChlKT0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFVkVOVC0tLS0tLS0tLS0+XCIsZS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGxQb3N0KCAoZS51cmwpLnJlcGxhY2UoXCIvcG9zdC9cIixcIlwiKSApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICBjYWxsUG9zdChpZCl7XHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhpZCk7XHJcbiAgICAgICAgICAgIGxldCBfdXJsID0gXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMvXCIraWQ7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKF91cmwpO1xyXG4gICAgICAgICAgICB0aGlzLmh0dHAuZ2V0KF91cmwpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoIChyZXM6UmVzcG9uc2UpPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCk9PntcclxuICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcy5qc29uKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXNwb25zZSA9IHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aXRsZSA9IHJlc3BvbnNlLnRpdGxlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keSA9IHJlc3BvbnNlLmJvZHk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgfVxyXG5cclxufSJdfQ==