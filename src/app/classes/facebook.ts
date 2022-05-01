import { Post } from './post';
import { Ad } from './ad';
import { User } from './user';
import { Feed } from './feed';
export class Facebook {
  posts: Post[] = [];
  ads: Ad[] = [];
  users: User[] = [];
  feeds: Feed[] = [];
  constructor(posts: Post[], ads: Ad[], users: User[], feeds: Feed[]) {
    this.posts = posts;
    this.ads = ads;
    this.users = users;
    this.feeds = feeds;
  }
}
