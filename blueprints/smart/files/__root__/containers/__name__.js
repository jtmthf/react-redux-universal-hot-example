import React from 'react';
import { connect } from 'react-redux';

type Props = {

}

export function <%= pascalEntityName %>(props: Props) {
  return (
    <div></div>
  );
}

const mapStateToProps = (state) => (
  {}
);
const mapDispatchToProps = (dispatch) => (
  {}
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(<%= pascalEntityName %>);
