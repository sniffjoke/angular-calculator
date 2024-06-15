import {NgModule} from "@angular/core";
import {RequestRouting} from "./request-routing.module";
import {PostListComponent} from "./components/post-list/post-list.component";
import {PostItemComponent} from "./components/post-item/post-item.component";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {PostService} from "./services/post.service";


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RequestRouting
  ],
  exports: [PostListComponent, PostItemComponent],
  declarations: [PostListComponent, PostItemComponent],
  providers: [
    PostService,
  ]
})

export class RequestModule {}
