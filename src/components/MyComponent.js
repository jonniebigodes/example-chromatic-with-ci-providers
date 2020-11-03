import React from "react";
import PropTypes from "prop-types";

const MyComponent = ({ itemOne,itemTwo}) => {
  return (
    <>
      <h2 style={{textAlign:'center'}}>This is a dummy Component</h2>
      <h3 style={{textAlign:'center'}}>This is the value of propertyA</h3>
      { itemOne }
      <h3 style={{textAlign:'center'}}>This is the value of propertyB</h3>
      { itemTwo }
    </>
  );
};

MyComponent.propTypes = {
  itemOne: PropTypes.string,
  itemTwo: PropTypes.string,
};

MyComponent.defaultProps = {
  itemOne: "PropA",
  itemTwo: "PropB",
};

export default MyComponent