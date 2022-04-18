export class Post {
  id: string;
  image?: string;
  time: Date;
  title: string;
  content: string;
  constructor(id: string, title: string, content: string, image?: string, time: Date = new Date()) {
    this.id = id
    this.title = title;
    this.content = content;
    this.image = image;
    this.time = time
  }
}
