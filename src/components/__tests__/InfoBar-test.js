import React from 'react';
import ReactDOM from 'react-dom';
import {renderIntoDocument} from 'react-addons-test-utils';
import { expect} from 'chai';
import { InfoBar } from 'components';

describe('InfoBar', () => {
  const data = {
    message: 'This came from the api server',
    time: Date.now()
  };
  const renderer = renderIntoDocument(
    <InfoBar info={data}/>
  );
  const dom = ReactDOM.findDOMNode(renderer);

  it('should render correctly', () => {
    return expect(renderer).to.be.ok;
  });

  it('should render with correct value', () => {
    const text = dom.getElementsByTagName('strong')[0].textContent;
    expect(text).to.equal(data.message);
  });

  it('should render with a reload button', () => {
    const text = dom.getElementsByTagName('button')[0].textContent;
    expect(text).to.be.a('string');
  });

  it('should render the correct className', () => {
    const styles = require('components/InfoBar/InfoBar.scss');
    expect(styles.infoBar).to.be.a('string');
    expect(dom.className).to.include(styles.infoBar);
  });
});
