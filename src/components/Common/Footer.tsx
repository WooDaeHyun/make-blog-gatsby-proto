import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

// const FooterContainer = styled.div`
//   display: flex;
//   height: 500px;
//   justify-content: center;
//   align-items: center;
// `

const FooterWrapper = styled.div`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;
  background-color: black;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`

const Footer: FunctionComponent = function () {
  return (
    <FooterWrapper>
      Thanks for Visiting my blog, have a Good Day 😆
      <br />© 2023 Developer WooDaeHyun, Powered By Gatsby.
    </FooterWrapper>
  )
}

export default Footer
