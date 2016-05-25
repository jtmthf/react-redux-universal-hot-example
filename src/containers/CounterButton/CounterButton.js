import {connectMultireducer} from 'multireducer';
import {increment} from 'redux/modules/counter';
import {CounterButton} from 'components';

export default connectMultireducer(
  (key, state) => ({count: state.multireducer[key].count}),
  {increment}
)(CounterButton);
