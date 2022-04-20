import {createGlobalStyle} from "styled-components";
import RobotoBold from "../assets/fonts/Roboto-Bold.ttf"
import RobotoMedium from "../assets/fonts/Roboto-Medium.ttf"
import RobotoRegular from "../assets/fonts/Roboto-Regular.ttf"

import globalCustom from "./globalCustomStyle"

export default createGlobalStyle`
     /* CSS RESET */
    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
    display: block;
    }
    body {
    line-height: 1;
    }
    ol,
    ul {
    list-style: none;
    }
    blockquote,
    q {
    quotes: none;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
    content: "";
    content: none;
    }
    table {
    border-collapse: collapse;
    border-spacing: 0;
    }
    button,
    input,
    optgroup,
    select,
    textarea,html input[type="button"],
    input[type="reset"],
    input[type="submit"],button[disabled],
    html input[disabled],button::-moz-focus-inner,
    input::-moz-focus-inner, input[type="checkbox"],
    input[type="radio"], input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button, input[type="search"], input[type="search"]::-webkit-search-cancel-button,
    input[type="search"]::-webkit-search-decoration {
      border:none;
      background-image:none;
      background-color:transparent;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
    }
    
    button {
      border: none;
      margin: 0;
      padding: 0;
      width: auto;
      overflow: visible;
      background: transparent;
      /* inherit font & color from ancestor */
      color: inherit;
      font: inherit;
      /* Normalize line-height. Cannot be changed from normal in Firefox 4+. */
      line-height: normal;
      /* Corrects font smoothing for webkit */
      -webkit-font-smoothing: inherit;
      -moz-osx-font-smoothing: inherit;
      /* Corrects inability to style clickable input types in iOS */
      -webkit-appearance: none;
    }
    a {
      text-decoration : none;
    }
    /* Remove excess padding and border in Firefox 4+ */
    &::-moz-focus-inner {
        border: 0;
        padding: 0;
    }
    /* FONTS */
    @font-face {
      font-family: "RobotoBold";
      src: url(${RobotoBold});
    }
    @font-face {
      font-family: "RobotoRegular";
      src: url(${RobotoRegular});
    }
    @font-face {
      font-family: "RobotoMedium";
      src: url(${RobotoMedium});
    }
    /* GLOBAL STYLES */
    * {
      box-sizing: border-box;
    }
    html::-webkit-scrollbar {
      display: none;
    }
    /* Hide scrollbar for IE, Edge and Firefox */
    html {
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
    }
    
    body {
      background: ${({ theme }) => theme.colors.background};
      overflow-x : hidden;
      transition: color 0.3s;
    }
    
     ${globalCustom}
`
