// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IconSearchOutlined2Icon(props) {
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
          "M14.213 13.352l-4.058-4.058c.63-.814.97-1.81.97-2.857a4.66 4.66 0 00-1.373-3.314A4.653 4.653 0 006.437 1.75a4.66 4.66 0 00-3.314 1.373A4.65 4.65 0 001.75 6.437c0 1.252.49 2.43 1.373 3.315a4.65 4.65 0 003.314 1.373c1.047 0 2.041-.34 2.855-.969l4.058 4.056a.129.129 0 00.181 0l.681-.68a.129.129 0 000-.18zm-5.3-4.44a3.481 3.481 0 01-2.476 1.025 3.481 3.481 0 01-2.475-1.024 3.481 3.481 0 01-1.025-2.476 3.48 3.48 0 011.026-2.475 3.481 3.481 0 012.474-1.025c.935 0 1.815.363 2.475 1.026a3.481 3.481 0 011.025 2.474c0 .935-.364 1.815-1.024 2.475z"
        }
        fill={"currentColor"}
        fillOpacity={".45"}
      ></path>
    </svg>
  );
}

export default IconSearchOutlined2Icon;
/* prettier-ignore-end */
