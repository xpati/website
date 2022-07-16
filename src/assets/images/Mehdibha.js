import * as React from "react";
import { useTheme } from "@material-ui/styles";

const Logo = (props) => {
    const theme = useTheme();
  return (
      <span style={{ stroke: theme.logoColor, fontStyle: "italic", fontSize:"2rem", fontFamily:"Comic Sans MS", textDecoration:"underline" }}>ST</span>
  );
};

export default Logo;
