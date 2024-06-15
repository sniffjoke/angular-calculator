import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {PostComment, PostService} from "../../services/post.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrl: './post-item.component.scss'
})
export class PostItemComponent implements OnInit {

  public postComment?: PostComment
  public comments$?: Observable<PostComment[]>
  public currentId!: number

  constructor(private route: ActivatedRoute, private postService: PostService) {}

  ngOnInit(): void {
    this.comments$ = this.postService.getComments()
    // this.route.params.subscribe((params: Params) => {
      // this.postComment = this.comments$[params['id'] - 1]
      // this.postComment = {
      //   postId: 1,
      //   id: 1,
      //   name: 'asdkajlkej',
      //   email: 'akdslfk',
      //   body: 'ajdsklejwrndsjk'
      // }
    // })
    this.route.params.subscribe((params: Params) => {
      // this.comments$.subscribe({next: (data: PostComment[]) => this.postComment = data[]})
      this.currentId = params['id']
    })
    this.comments$.subscribe({next: (data: PostComment[]) => this.postComment = data[this.currentId - 1]})


  }

}
