import { connect } from 'react-redux';
import { MiniInfoBar } from 'components';

export default connect(state => ({ time: state.info.data.time }))(MiniInfoBar);
