import { Feed } from './feed';
import { Post } from './post';

export class User {
  id: string = '1';
  name: string;
  age: number;
  email: string;
  password: string = '123456';
  birthday: Date;
  feed: Feed[];
  userPosts: Post[];

  constructor(
    id: string,
    name: string,
    age: number,
    email: string,
    password: string,
    birthday: Date,
    feed: Feed[],
    userPosts: Post[]
  ) {
    this.id = id
    this.name = name;
    this.age = age;
    this.email = email;
    this.password = password;
    this.birthday = birthday;
    this.feed = feed;
    this.userPosts = userPosts;
  }
}
