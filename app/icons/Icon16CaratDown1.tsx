import PropTypes from "prop-types";
import React from "react";

export const Icon16CaratDown1 = ({ color = "#82808e", opacity = "unset", className }) => {
  return (
    <svg
      className={`icon-16-carat-down-1 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M3 6.08579V6C3 5.44772 3.44772 5 4 5H12C12.5523 5 13 5.44772 13 6V6.08579C13 6.351 12.8946 6.60536 12.7071 6.79289L8.79289 10.7071C8.60536 10.8946 8.351 11 8.08579 11H7.91421C7.649 11 7.39464 10.8946 7.20711 10.7071L3.29289 6.79289C3.10536 6.60536 3 6.351 3 6.08579Z"
        fill={color}
        fillOpacity={opacity}
      />
    </svg>
  );
};

Icon16CaratDown1.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
};