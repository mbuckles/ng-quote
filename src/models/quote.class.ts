export class Quote {
  public quote: string;
  public author: string;
  public cat: string;

  constructor(quote: string, author: string, cat: string) {
    this.quote = quote;
    this.author = author;
    this.cat = cat;
  }
}
