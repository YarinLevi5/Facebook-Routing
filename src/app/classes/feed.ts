import { Ad } from './ad';
import { Post } from './post';
export class Feed {
  ads: Ad[];
  posts: Post[];
  constructor(posts: Post[], ads: Ad[]) {
    this.ads = ads;
    this.posts = posts;
  }
}
