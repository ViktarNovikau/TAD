// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3f7to55QzZLdVuCvXTRtuj
// Component: DQ9zxsgHSg
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_ant_5.module.css"; // plasmic-import: 3f7to55QzZLdVuCvXTRtuj/projectcss
import sty from "./PlasmicTextArea.module.css"; // plasmic-import: DQ9zxsgHSg/css

export const PlasmicTextArea__VariantProps = new Array();

export const PlasmicTextArea__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicTextArea__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  return (
    <div
      data-plasmic-name={"inputTextarea"}
      data-plasmic-override={overrides.inputTextarea}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.inputTextarea
      )}
    >
      <textarea
        data-plasmic-name={"textarea"}
        data-plasmic-override={overrides.textarea}
        className={classNames(
          projectcss.all,
          projectcss.textarea,
          projectcss.__wab_text,
          sty.textarea
        )}
      >
        {"Textarea"}
      </textarea>
    </div>
  );
}

const PlasmicDescendants = {
  inputTextarea: ["inputTextarea", "textarea"],
  textarea: ["textarea"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicTextArea__ArgProps,
          internalVariantPropNames: PlasmicTextArea__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicTextArea__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "inputTextarea") {
    func.displayName = "PlasmicTextArea";
  } else {
    func.displayName = `PlasmicTextArea.${nodeName}`;
  }
  return func;
}

export const PlasmicTextArea = Object.assign(
  // Top-level PlasmicTextArea renders the root element
  makeNodeComponent("inputTextarea"),
  {
    // Helper components rendering sub-elements
    textarea: makeNodeComponent("textarea"),
    // Metadata about props expected for PlasmicTextArea
    internalVariantProps: PlasmicTextArea__VariantProps,
    internalArgProps: PlasmicTextArea__ArgProps
  }
);

export default PlasmicTextArea;
/* prettier-ignore-end */
