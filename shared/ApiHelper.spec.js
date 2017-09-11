import ApiHelper from './ApiHelper';

describe('ApiHelper', () => {
  let helper;
  beforeEach(() => {
    helper = new ApiHelper();
  });

  test('It should exist and have a string as `apiUrl` property', () => {
    expect(helper).not.toBeFalsy();
    expect(typeof helper.apiUrl).toEqual('string');
  });
});
