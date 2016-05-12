import React from 'react';
import { storiesOf } from '@kadira/storybook';
import MiniInfoBar from './MiniInfoBar';
import { Provider } from 'react-redux';
import createStore from 'redux/create';


const mockStore = {
  info: {
    data: {
      message: 'This message came from the server',
      time: new Date()
    }
  }
};
const store = createStore(mockStore);

storiesOf('MiniInfoBar')
  .addDecorator((story) => (
    <Provider store={store} key="provider">
      {story()}
    </Provider>
  ))
  .add('mini info bar', () => (<MiniInfoBar />));
