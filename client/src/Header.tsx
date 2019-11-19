import React from "react";
import PropTypes from "prop-types";

// Defines the types of the props being provided.
interface HeaderProps {
  title: string;
  subTitle: string;
}

// Props need to have types as well.
function Header({ title, subTitle }: HeaderProps) {
  return (
    <div className="header-container">
      <div className="header-text">
        <h1 className="title">{title}</h1>
        <h4 className="small-header">{subTitle}</h4>
      </div>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired
};

export default Header;
