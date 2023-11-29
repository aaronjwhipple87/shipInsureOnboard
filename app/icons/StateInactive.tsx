import PropTypes from "prop-types";
import React from "react";

export const StateInactive = ({ color = "#6675FF", opacity = "unset", className }) => {
  return (
    <svg
      className={`state-inactive ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M8.00002 14C11.3137 14 14 11.3137 14 7.99999C14 4.68628 11.3137 1.99999 8.00002 1.99999C4.68631 1.99999 2.00002 4.68628 2.00002 7.99999C2.00002 11.3137 4.68631 14 8.00002 14ZM8.00002 15.3333C12.0501 15.3333 15.3334 12.0501 15.3334 7.99999C15.3334 3.9499 12.0501 0.666656 8.00002 0.666656C3.94993 0.666656 0.666687 3.9499 0.666687 7.99999C0.666687 12.0501 3.94993 15.3333 8.00002 15.3333Z"
        fill={color}
        fillOpacity={opacity}
        fillRule="evenodd"
      />
    </svg>
  );
};

StateInactive.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
};