import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import widgetValidation from './widgetValidation';
import * as widgetActions from 'redux/modules/widgets';
import { WidgetForm } from 'components';

connect(
  state => ({
    saveError: state.widgets.saveError
  }),
  dispatch => bindActionCreators(widgetActions, dispatch)
)(
reduxForm({
  form: 'widget',
  fields: ['id', 'color', 'sprocketCount', 'owner'],
  validate: widgetValidation
})(WidgetForm));
