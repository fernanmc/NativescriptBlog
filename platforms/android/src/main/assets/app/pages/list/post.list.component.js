"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
var PostListComponent = (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function PostListComponent(http, ngZone) {
        this.http = http;
        this.ngZone = ngZone;
    }
    PostListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var _url = "https://jsonplaceholder.typicode.com/posts/";
        this.http.get(_url)
            .subscribe(function (res) {
            _this.ngZone.run(function () {
                // console.log(res.json());
                _this.posts = res.json();
            });
        });
    };
    PostListComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            //moduleId: module.id,
            template: "\n    <StackLayout>\n    <image src=\"https://davidhernandez.es/wp-content/uploads/2011/08/logo.gif\"></image>\n    <Label text=\"Listado\" class=\"title\"></Label>\n    <ListView [items]=\"posts\">\n        <template let-item=\"item\" let-i=\"index\" let-odd=\"odd\" let-even=\"even\">\n        <Label [nsRouterLink]=\"['/post/', item.id]\" class=\"listado\" [class.odd] [class.even]=\"even\" [text]='item.id+\":\"+item.title'>\n        </Label>\n        </template>\n    </ListView>\n    </StackLayout>\n    ",
        }),
        __metadata("design:paramtypes", [http_1.Http, core_1.NgZone])
    ], PostListComponent);
    return PostListComponent;
}());
exports.PostListComponent = PostListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBvc3QubGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEQ7QUFDMUQsc0NBQXNFO0FBRXRFLGdDQUE4QjtBQUM5QixpQ0FBK0I7QUFFL0I7Ozs7OztFQU1FO0FBa0JGO0lBR0ksNklBQTZJO0lBQzdJLGlIQUFpSDtJQUNsSCwyQkFBb0IsSUFBVSxFQUFVLE1BQWE7UUFBakMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQU87SUFBSSxDQUFDO0lBRXpELG9DQUFRLEdBQVI7UUFBQSxpQkFXQztRQVZHLElBQUksSUFBSSxHQUFHLDZDQUE2QyxDQUFDO1FBRXpELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQzthQUNsQixTQUFTLENBQUUsVUFBQyxHQUFZO1lBQ3JCLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUNiLDJCQUEyQjtnQkFDMUIsS0FBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDNUIsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQTtJQUVOLENBQUM7SUFsQlEsaUJBQWlCO1FBaEI3QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsc0JBQXNCO1lBQ3RCLFFBQVEsRUFBRSxnZ0JBV1Q7U0FDSixDQUFDO3lDQU0yQixXQUFJLEVBQWlCLGFBQU07T0FMM0MsaUJBQWlCLENBbUI3QjtJQUFELHdCQUFDO0NBQUEsQUFuQkQsSUFtQkM7QUFuQlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE5nWm9uZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7SHR0cCwgUmVzcG9uc2UsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5cclxuLypAQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcclxuICAgIHRlbXBsYXRlOmA8bGFiZWwgdGV4dD1cIkxpc3RhZG9cIiBjbGFzcz1cInRpdGxlXCI+PC9sYWJlbD5gXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUG9zdExpc3RDb21wb25lbnQgeyB9XHJcbiovXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLWl0ZW1zXCIsXHJcbiAgICAvL21vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPFN0YWNrTGF5b3V0PlxyXG4gICAgPGltYWdlIHNyYz1cImh0dHBzOi8vZGF2aWRoZXJuYW5kZXouZXMvd3AtY29udGVudC91cGxvYWRzLzIwMTEvMDgvbG9nby5naWZcIj48L2ltYWdlPlxyXG4gICAgPExhYmVsIHRleHQ9XCJMaXN0YWRvXCIgY2xhc3M9XCJ0aXRsZVwiPjwvTGFiZWw+XHJcbiAgICA8TGlzdFZpZXcgW2l0ZW1zXT1cInBvc3RzXCI+XHJcbiAgICAgICAgPHRlbXBsYXRlIGxldC1pdGVtPVwiaXRlbVwiIGxldC1pPVwiaW5kZXhcIiBsZXQtb2RkPVwib2RkXCIgbGV0LWV2ZW49XCJldmVuXCI+XHJcbiAgICAgICAgPExhYmVsIFtuc1JvdXRlckxpbmtdPVwiWycvcG9zdC8nLCBpdGVtLmlkXVwiIGNsYXNzPVwibGlzdGFkb1wiIFtjbGFzcy5vZGRdIFtjbGFzcy5ldmVuXT1cImV2ZW5cIiBbdGV4dF09J2l0ZW0uaWQrXCI6XCIraXRlbS50aXRsZSc+XHJcbiAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgPC9MaXN0Vmlldz5cclxuICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9zdExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAvLyBpdGVtczogSXRlbVtdO1xyXG4gICAgcHVibGljIHBvc3RzOiBhbnk7XHJcbiAgICAvLyBUaGlzIHBhdHRlcm4gbWFrZXMgdXNlIG9mIEFuZ3VsYXLigJlzIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGltcGxlbWVudGF0aW9uIHRvIGluamVjdCBhbiBpbnN0YW5jZSBvZiB0aGUgSXRlbVNlcnZpY2Ugc2VydmljZSBpbnRvIHRoaXMgY2xhc3MuIFxyXG4gICAgLy8gQW5ndWxhciBrbm93cyBhYm91dCB0aGlzIHNlcnZpY2UgYmVjYXVzZSBpdCBpcyBpbmNsdWRlZCBpbiB5b3VyIGFwcOKAmXMgbWFpbiBOZ01vZHVsZSwgZGVmaW5lZCBpbiBhcHAubW9kdWxlLnRzLlxyXG4gICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHAsIHByaXZhdGUgbmdab25lOk5nWm9uZSkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IF91cmwgPSBcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy9cIjtcclxuXHJcbiAgICAgICAgdGhpcy5odHRwLmdldChfdXJsKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoIChyZXM6UmVzcG9uc2UpPT57XHJcbiAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKT0+e1xyXG4gICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMuanNvbigpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zdHMgPSByZXMuanNvbigpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgIFxyXG4gICAgfVxyXG59Il19