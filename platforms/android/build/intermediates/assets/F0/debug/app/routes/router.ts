import { PostViewComponent } from './../pages/view/post.view.component';
import { PostListComponent } from './../pages/list/post.list.component';
import { Routes } from '@angular/router';
import { AppComponent } from './../app.component';


export const routes = [
    {path:"", redirecTo: "/posts", patMatch: "full"},
    {path:"posts", component:PostListComponent},
    {path:"post/:id", component:PostViewComponent}
];