import {connect} from 'react-redux';
import {load} from 'redux/modules/info';
import {InfoBar} from 'components';

export default connect(
  state => ({info: state.info.data}),
  {load})(InfoBar);
