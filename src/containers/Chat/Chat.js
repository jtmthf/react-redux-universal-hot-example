import {connect} from 'react-redux';
import {Chat} from 'components';

export default connect(
  state => ({user: state.auth.user})
)(Chat);
