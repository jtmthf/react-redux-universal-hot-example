import React, { PropTypes } from 'react';

const InfoBar = ({ info, load }) => {
  const styles = require('./InfoBar.scss');
  return (
    <div className={`${styles.infoBar} well`}>
      <div className="container">
        This is an info bar
        {' '}
        <strong>{info ? info.message : 'no info!'}</strong>
        <span className={styles.time}>{info && new Date(info.time).toString()}</span>
        <button className="btn btn-primary" onClick={load}>Reload from server</button>
      </div>
    </div>
  );
};

InfoBar.propTypes = {
  info: PropTypes.object,
  load: PropTypes.func.isRequired
};

export default InfoBar;
