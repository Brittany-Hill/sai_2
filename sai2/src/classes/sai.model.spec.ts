import { Sai } from './sai.model';

let testSAI = new Sai('Discrete Structures', 3100, false);

describe('Sai', () => {
  it('should create an instance', () => {
    expect(testSAI).toBeTruthy();
  });

  it('Class name is equal to Discrete Structures', () => {
    expect(testSAI.getClassName()).toEqual('Discrete Structures')
  })
});
