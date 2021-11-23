import { User } from './user.model';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User({uid: '', email: '', displayName: ''})).toBeTruthy();
  });
});
