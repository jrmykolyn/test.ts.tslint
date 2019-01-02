export interface FooOpts {
  bar: string;
}

export class Foo {
  bar: string;

  constructor(opts: FooOpts) {
    console.log('INSIDE `Foo#constructor`. This should trigger a linter warning');
    this.bar = opts.bar;
  }
}

export default Foo;
