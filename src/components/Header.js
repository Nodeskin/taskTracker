import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd }) => {
  


  return (
    <header className="header">
      <h1> {title}</h1>
      <Button color='blue' text='Add Task' onClick={onAdd}/>
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
}

// const headingStyle = {
//   color:'red',
//   backgroundColor: 'blue'
// }

export default Header;
