import { connect } from 'react-redux';
import { initialize } from 'redux-form';
import { Survey } from 'components';

export default connect(
  () => ({}),
  { initialize }
)(Survey);
