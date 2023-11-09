import React from "react";
import "./Navigation.css";

function Navigation({ className, children }) {
  return <nav className={`navigation ${className ?? ""}`}>{children}</nav>;
}

export default Navigation;
