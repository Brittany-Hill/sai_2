import { Sai } from './sai.model';

describe('Sai', () => {
  it('should create an instance', () => {
    expect(new Sai('Discrete Structures', 3100, false)).toBeTruthy();
  });
});
