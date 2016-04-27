import React from 'react';
import { reduxForm } from 'redux-form';

export const fields = [];

const validate = () => {
  const errors = {};
  return errors;
};

type Props = {
  handleSubmit: Function,
  fields: Object,
}
export class <%= pascalEntityName %> extends React.Component {
  defaultProps = {
    fields: {},
  }

  props: Props;

  render() {
    const { fields, handleSubmit } = this.props; // eslint-disable-line

    return (
      <form onSubmit={handleSubmit}>
      </form>
    );
  }
}

<%= pascalEntityName %> = reduxForm({
  form: '<%= pascalEntityName %>',
  fields,
  validate
})(<%= pascalEntityName %>);

export default <%= pascalEntityName %>;
