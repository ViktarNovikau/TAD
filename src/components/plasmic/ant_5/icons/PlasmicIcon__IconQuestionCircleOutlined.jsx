// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IconQuestionCircleOutlinedIcon(props) {
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
          "M8 1a7 7 0 10.001 14A7 7 0 008 1zm0 12.813A5.813 5.813 0 018 2.187a5.813 5.813 0 010 11.626z"
        }
        fill={"currentColor"}
        fillOpacity={".45"}
      ></path>

      <path
        d={
          "M9.744 4.948A2.634 2.634 0 008 4.312c-.656 0-1.275.227-1.744.636-.487.427-.756 1-.756 1.614v.12c0 .068.056.124.125.124h.75a.125.125 0 00.125-.125v-.119c0-.689.673-1.25 1.5-1.25s1.5.561 1.5 1.25c0 .486-.344.932-.877 1.136a1.746 1.746 0 00-1.125 1.654v.335c0 .07.057.125.125.125h.75a.125.125 0 00.125-.125v-.354a.755.755 0 01.483-.7c.922-.355 1.517-1.167 1.517-2.07.002-.615-.267-1.188-.754-1.615zm-2.369 6.49a.625.625 0 101.25 0 .625.625 0 00-1.25 0z"
        }
        fill={"currentColor"}
        fillOpacity={".45"}
      ></path>
    </svg>
  );
}

export default IconQuestionCircleOutlinedIcon;
/* prettier-ignore-end */
