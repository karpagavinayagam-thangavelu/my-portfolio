import React, { memo } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() =>
  ({
    CodeCampLogo: {
      fill: "inherit",
      width: '20px',
      height: '20px'
    },
  })
);

export const CodeCampLogo = (props: any) => {
  const classes = useStyles();
  return (
    <svg  viewBox="0 0 271 413"  className={classes.CodeCampLogo}>
    <path d="M195.42 217.9C175.49 212.81 257.27 116.19 111.92 0.51001C111.92 0.51001 130.99 61.1 34.83 196.31C-61.38 331.47 77.61 411.99 77.61 411.99C77.61 411.99 12.38 377.23 88.21 253.47C101.78 231.02 119.54 210.69 141.59 164.93C141.59 164.93 161.11 192.48 150.92 252.21C135.68 342.47 217.01 316.64 218.27 317.9C246.68 351.35 194.74 410.14 191.58 411.99C188.43 413.79 339.91 320.87 232.29 181.03C224.92 188.4 215.34 223 195.42 217.9Z" fill="inherit"/>
    </svg>
  );
};

export default memo(CodeCampLogo);
