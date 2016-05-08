import React from 'react';
import { storiesOf } from '@kadira/storybook';
import CounterButton from './CounterButton';
import { Provider } from 'react-redux';
import createStore from 'redux/create';


const mockStore = {
  multireducer: {
    counter1: {
      count: 0
    }
  }
};
const store = createStore(mockStore);

storiesOf('CounterButton')
  .addDecorator((story) => (
    <Provider store={store} key="provider">
      {story()}
    </Provider>
  ))
  .add('button', () => (<CounterButton multireducerKey="counter1"/>));
