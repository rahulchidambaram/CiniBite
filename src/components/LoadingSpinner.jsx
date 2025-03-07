import CircularProgress from "@mui/material/CircularProgress";
import PropTypes from "prop-types";
import React from "react";
import "./LoadingSpinner.css";

const componentColors = [
  "primary",
  "secondary",
  "success",
  "info",
  "warning",
  "error",
  "inherit",
];

export function LoadingSpinner({ color, size }) {
  return <CircularProgress size={size} color={color} />;
}

LoadingSpinner.propTypes = {
  size: PropTypes.string,
  color: PropTypes.oneOf(componentColors),
};
