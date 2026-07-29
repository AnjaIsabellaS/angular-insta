import { Component, input, signal } from '@angular/core';
import { Post } from '../../../interfaces/post';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-single-post',
  imports: [FormField],
  templateUrl: './single-post.html',
  styleUrl: './single-post.scss',
})
export class SinglePost {
  post = input.required<Post>();

  commentInput = form(signal(''));

  addComment() {
  const commentUser =  this.commentInput().value().trim(); /* die Variable commentUser
  enthält den ausgelesenen Text, der Leerzeichen mit trim() entfernt*/

  if (!commentUser) {
    return;
  } /*Dieser Test verhindert, dass leere Kommentare ins Array gehen, wenn ein User auf "Send" klickt ohne etwas einzugeben*/
  
this.post().comments.push({
  author: 'Du',
  text: commentUser,
});

this.commentInput().value.set('');

}

  

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

