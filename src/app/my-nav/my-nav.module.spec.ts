import { MyNavModule } from './my-nav.module';

describe('MyNavModule', () => {
  let myNavModule: MyNavModule;

  beforeEach(() => {
    myNavModule = new MyNavModule();
  });

  it('should create an instance', () => {
    expect(myNavModule).toBeTruthy();
  });
});
