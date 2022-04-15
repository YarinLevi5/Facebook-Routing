import { Feed } from './feed';
import { Post } from './post';
import { Ad } from './ad';
export class User extends Feed {
  name: string;
  age: number;
  email: string;
  password: string = '123456';
  birthday: Date;
  userPosts: Post[];
  constructor(
    name: string,
    age: number,
    email: string,
    password: string,
    birthday: Date,
    posts: Post[],
    ads: Ad[],
    userPosts: Post[]
  ) {
    super(posts, ads);
    this.name = name;
    this.age = age;
    this.email = email;
    this.setPassword(password);
    this.birthday = birthday;
    this.userPosts = userPosts;
  }
  setPassword(password: string) {
    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters long');
    } else {
      this.password = password;
    }
  }
}
