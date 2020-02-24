import { Person } from './person';

describe('Person', () => {
  it('should create an instance', () => {
    // tslint:disable-next-line:new-parens
    expect(new Person()).toBeTruthy();
  });
});
