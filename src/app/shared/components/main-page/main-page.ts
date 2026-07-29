import { Component } from '@angular/core';
import { Post, Comment } from '../../interfaces/post';
import { SinglePost } from './single-post/single-post';

@Component({
  selector: 'app-main-page',
  imports: [SinglePost],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {
  posts: Post[] = [
  {
    name: 'Anja',
    img: 'images/banana.jpg',
    Likes: 95,
    isLiked: false,
    comments: [
      { author: 'Charlotte', text: 'Schöne Bananen!' },
      { author: 'Lisa', text: 'Nice' },
    ],
  },
  {
    name: 'Charlotte',
    img: 'images/orange.jpg',
    Likes: 3,
    isLiked: false,
    comments: [{ author: 'Anja', text: 'Yummy!' }],
  },
  {
    name: 'Lisa',
    img: 'images/currant.jpg',
    Likes: 12,
    isLiked: false,
    comments: [],
  },
];

/*Fügt einen neuen Kommentar zum comments-Array des jeweiligen Posts hinzu 
(per push) — reagiert auf das commentAdded-Event aus der Kindkomponente.*/
onCommentAdded(post: Post, comment: Comment) {
  post.comments.push(comment);
}
}
