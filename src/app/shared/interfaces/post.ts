export interface Post {
  name: string;
  img: string;
  Likes: number;
  isLiked: boolean;
  comments: Comment[];
}

export interface Comment {
  id: number;
  author: string;
  text: string;
}
