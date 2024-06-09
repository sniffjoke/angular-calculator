import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {PostService} from "./services/post.service";
import {PostListComponent} from "./components/post-list/post-list.component";

const routes: Routes = [
  {
    path: '',
    component: PostListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [PostService]
})

export class RequestRouting {}

