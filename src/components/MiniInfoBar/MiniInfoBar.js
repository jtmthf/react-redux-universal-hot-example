import React, { PropTypes } from 'react';


const MiniInfoBar = ({ time }) => (
  <div className="mini-info-bar">
    The info bar was last loaded at
    {' '}
    <span>{time && new Date(time).toString()}</span>
  </div>
);

MiniInfoBar.propTypes = {
  time: PropTypes.number
};

export default MiniInfoBar;
