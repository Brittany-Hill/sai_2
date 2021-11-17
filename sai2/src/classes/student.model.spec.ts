import { Sai } from './sai.model';
import { Student } from './student.model';

describe('Student', () => {
  it('should create an instance', () => {
    expect(new Student('John', 'Smith', 'johnsmith12345@students.uwf.edu', new Sai('Discrete Structures', 3100, false))).toBeTruthy();
  });
});
