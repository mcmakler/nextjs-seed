import ApiHelper from './../shared/ApiHelper';

describe('ApiHelper', () => {
  let helper;
  beforeEach(() => {
    helper = new ApiHelper();
  });

  test('It should exist', () => {
    expect(helper).not.toBeFalsy();
  });
});
