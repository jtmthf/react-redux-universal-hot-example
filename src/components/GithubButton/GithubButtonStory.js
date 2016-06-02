import React from 'react';
import { storiesOf } from '@kadira/storybook';
import GithubButton from './GithubButton';

storiesOf('GithubButton')
  .add('star', () => (<GithubButton
    user="erikras"
    repo="react-redux-universal-hot-example"
    type="star"
    width={160}
    height={30}
    count large
  />))
  .add('fork', () => (<GithubButton
    user="erikras"
    repo="react-redux-universal-hot-example"
    type="fork"
    width={160}
    height={30}
    count large
  />));
