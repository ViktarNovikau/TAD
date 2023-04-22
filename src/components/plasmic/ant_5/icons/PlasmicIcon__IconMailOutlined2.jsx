// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IconMailOutlined2Icon(props) {
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
          "M14.5 2.5h-13A.5.5 0 001 3v10a.5.5 0 00.5.5h13a.5.5 0 00.5-.5V3a.5.5 0 00-.5-.5zm-.625 1.731v8.144H2.125V4.231l-.431-.336.614-.789.669.52h10.048l.669-.52.614.79-.433.335zm-.85-.606L8 7.531 2.975 3.625l-.669-.52-.614.789.431.336 5.338 4.15a.875.875 0 001.073 0l5.341-4.149.431-.336-.614-.789-.667.519z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconMailOutlined2Icon;
/* prettier-ignore-end */
