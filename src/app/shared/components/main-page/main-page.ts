import { Component } from '@angular/core';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-main-page',
  imports: [],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {
   posts: Post[] = [
    { name: 'Anja', img: 'images/banana.jpg', Likes: 95 },
    { name: 'Charlotte', img: 'images/orange.jpg', Likes: 3 },
    { name: 'Lisa', img: 'images/currant.jpg', Likes: 12 },
  ];
}
