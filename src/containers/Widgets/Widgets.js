import { connect } from 'react-redux';
import * as widgetActions from 'redux/modules/widgets';
import { initializeWithKey } from 'redux-form';
import { Widgets } from 'components';
import { asyncConnect } from 'redux-async-connect';

export default asyncConnect([{
  deferred: true,
  promise: ({ store: { dispatch, getState } }) => {
    if (!widgetActions.isLoaded(getState())) {
      return dispatch(widgetActions.load());
    }
    return undefined;
  }
}])(connect(
  state => ({
    widgets: state.widgets.data,
    editing: state.widgets.editing,
    error: state.widgets.error,
    loading: state.widgets.loading
  }),
  { ...widgetActions, initializeWithKey }
)(Widgets));
