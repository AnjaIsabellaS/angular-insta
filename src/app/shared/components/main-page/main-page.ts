import { Component } from '@angular/core';
import { Post } from '../../interfaces/post';
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
      { id: 1, author: 'Charlotte', text: 'Schöne Banane!' },
      { id: 2, author: 'Lisa', text: 'Nice' },
    ],
  },
  {
    name: 'Charlotte',
    img: 'images/orange.jpg',
    Likes: 3,
    isLiked: false,
    comments: [{ id: 3, author: 'Anja', text: 'Yummy!' }],
  },
  {
    name: 'Lisa',
    img: 'images/currant.jpg',
    Likes: 12,
    isLiked: false,
    comments: [],
  },
];
}
