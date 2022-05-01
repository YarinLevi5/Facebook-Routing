export class Ad {
  id?: string;
  image?: string;
  title?: string;
  constructor(id?: string, image?: string, title?: string) {
    this.id = id
    this.image = image;
    this.title = title;
  }
}
