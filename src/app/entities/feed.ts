import { Ad } from './ad';
import { Post } from './post';
import { Facebook } from './facebook';
export class Feed extends Facebook {
  constructor(posts: Post[], ads: Ad[]) {
    super(posts, ads, [], []);
  }
}
