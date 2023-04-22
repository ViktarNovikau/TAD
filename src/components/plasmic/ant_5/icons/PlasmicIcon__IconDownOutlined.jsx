// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IconDownOutlinedIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M13.813 4H12.64a.25.25 0 00-.202.103L8 10.222 3.561 4.103A.25.25 0 003.359 4H2.188a.125.125 0 00-.102.198l5.51 7.596c.2.275.609.275.807 0l5.51-7.596a.124.124 0 00-.1-.198z"
        }
        fill={"currentColor"}
        fillOpacity={".25"}
      ></path>
    </svg>
  );
}

export default IconDownOutlinedIcon;
/* prettier-ignore-end */
