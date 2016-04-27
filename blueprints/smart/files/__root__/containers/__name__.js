import React from 'react';
import { connect } from 'react-redux';

type Props = {

}
export class <%= pascalEntityName %> extends React.Component {
  props: Props;

  render() {
    return (
      <div></div>
    );
  }
}

const mapStateToProps = (state) => { // eslint-disable-line no-unused-vars
  return {};
};
const mapDispatchToProps = (dispatch) => { // eslint-disable-line no-unused-vars
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(<%= pascalEntityName %>);
