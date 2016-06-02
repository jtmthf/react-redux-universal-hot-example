import React, { Component, PropTypes } from 'react';

export default class CounterButton extends Component {
  static propTypes = {
    count: PropTypes.number,
    increment: PropTypes.func.isRequired,
    className: PropTypes.string
  }

  props = {
    className: ''
  }

  render() {
    const { count, increment } = this.props; // eslint-disable-line no-shadow
    let { className } = this.props;
    className += ' btn btn-default';
    return (
      <button className={className} onClick={increment}>
        You have clicked me {count} time{count === 1 ? '' : 's'}.
      </button>
    );
  }
}
