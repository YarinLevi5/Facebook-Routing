export class Post {
  image?: string;
  time: Date;
  title: string;
  content: string;
  constructor(title: string, content: string, image?: string) {
    this.title = title;
    this.content = content;
    this.image = image;
    this.time = new Date();
  }
}
