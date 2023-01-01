import React, { FunctionComponent } from 'react'
// import 'fontsource-noto-sans-kr'
import { Global, css } from '@emotion/react'

const defaultStyle = css`
  @import url('https://fonts.googlepis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR';
    background-color: #282828;
    color: #eaeaeb;
  }

  /* html,
  body,
  #__gatsby {
    height: 100%;
  } */

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`

const GlobalStyle: FunctionComponent = function () {
  return <Global styles={defaultStyle} />
}

export default GlobalStyle
