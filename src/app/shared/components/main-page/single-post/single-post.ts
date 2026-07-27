import { Component, input } from '@angular/core';
import { Post } from '../../../interfaces/post';

@Component({
  selector: 'app-single-post',
  imports: [],
  templateUrl: './single-post.html',
  styleUrl: './single-post.scss',
})
export class SinglePost {
  post = input.required<Post>();

  toggleLike(): void {
    const post = this.post();
    if (post.isLiked) {
      post.isLiked = false;
      post.Likes = post.Likes - 1;
    } else {
      post.isLiked = true;
      post.Likes = post.Likes + 1;
    }
  }
}

