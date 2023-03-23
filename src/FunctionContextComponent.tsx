import React, { useContext } from "react";
import { ThemeContext } from "./App";
function FunctionContextComponent() {
  const darkThem = useContext(ThemeContext);
  const themeStyle = {
    backgroundColor: darkThem ? "#333" : "#CCC",
    color: darkThem ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };
  return (
    <ThemeContext.Consumer>
      {(darkTheme) => {
        return <div style={themeStyle}>Function Theme</div>;
      }}
    </ThemeContext.Consumer>
  );
}

export default FunctionContextComponent;
