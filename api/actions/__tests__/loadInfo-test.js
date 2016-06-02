import { expect } from 'chai';
import loadInfo from '../loadInfo';
import timekeeper from 'timekeeper';

describe('loadInfo', () => {
  it('loads the current date', async () => {
    const now = Date.now();
    timekeeper.freeze(now);

    const data = await loadInfo();
    expect(data).to.deep.equal({ time: now, message: 'This came from the api server' });
  });
});
