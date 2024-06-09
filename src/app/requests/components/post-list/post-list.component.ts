import {Component, OnInit} from '@angular/core';
import {PostService} from "../../services/post.service";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [PostService],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss',
})
export class PostListComponent implements OnInit {
  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe(res => console.log(res))
  }

}
