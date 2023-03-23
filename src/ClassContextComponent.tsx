import React from "react";
import { ThemeContext } from "./App";
const themeStyle = (dark: any) => {
  return {
    backgroundColor: dark ? "#333" : "#CCC",
    color: dark ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };
};
function ClassContextComponent() {
  return (
    <ThemeContext.Consumer>
      {(darkTheme) => {
        return <div style={themeStyle(darkTheme)}>Class Theme</div>;
      }}
    </ThemeContext.Consumer>
  );
}

export default ClassContextComponent;
