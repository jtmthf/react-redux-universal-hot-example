import {connect} from 'react-redux';
import * as authActions from 'redux/modules/auth';
import {LoginSuccess} from 'components';

export default connect(
  state => ({user: state.auth.user}),
  authActions
)(LoginSuccess);
