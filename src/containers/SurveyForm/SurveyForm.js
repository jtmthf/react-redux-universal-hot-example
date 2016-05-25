import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import surveyValidation from './surveyValidation';
import {isValidEmail} from 'redux/modules/survey';
import {SurveyForm} from 'components';

function asyncValidate(data, dispatch, {isValidEmail}) { // eslint-disable-line no-shadow
  if (!data.email) {
    return Promise.resolve({});
  }
  return isValidEmail(data);
}

export default connect(() => ({}),
  {isValidEmail}
)(reduxForm({
  form: 'survey',
  fields: ['name', 'email', 'occupation', 'currentlyEmployed', 'sex'],
  validate: surveyValidation,
  asyncValidate,
  asyncBlurFields: ['email']
})(SurveyForm));
