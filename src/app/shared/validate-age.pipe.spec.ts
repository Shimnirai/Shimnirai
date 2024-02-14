import { ValidateAgePipe } from './validate-age.pipe';

describe('ValidateAgePipe', () => {
  it('create an instance', () => {
    const pipe = new ValidateAgePipe();
    expect(pipe).toBeTruthy();
  });
});
