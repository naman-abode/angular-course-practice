export class Todo {
  public id: string;

  constructor(
    public text: string,
    public done: boolean = false) {
    this.id = crypto.randomUUID();
  }
}
