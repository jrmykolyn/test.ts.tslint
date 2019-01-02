export interface PersonOpts {
  name: string;
}

export class Person {
  name: string;

  constructor(opts: PersonOpts) {
    this.name = opts.name;
  }
}

export default Person;
