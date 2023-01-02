import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import ProfileImage from 'components/Main/ProfileImage'

type IntroductionProps = {
  profileImage: IGatsbyImageData
}

const Background = styled.div`
  margin-top: 30px;
  width: 100%;
  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
  color: #eaeaeb;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #282828
  width: 768px;
  height: 350px;
  margin: 0px auto;
  border-bottom: 1px solid #eaeaeb;
 

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    padding: 0 20px;
  }
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const SubTitle2 = styled.div`
  align-self: center;
  font-size: 35px;
  font-weight: 700;
  color: #abf200;
  @media (max-width: 768px) {
    font-size: 25px;
  }
`

const SubTitle = styled.div`
  align-self: center;
  font-size: 20px;
  font-weight: 400;
  color: #ff00dd;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

const Title = styled.div`
  align-self: center;
  margin-top: 5px;
  font-size: 35px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`

const Introduction: FunctionComponent<IntroductionProps> = function ({
  profileImage,
}) {
  return (
    <Background>
      <Wrapper>
        <ProfileImage profileImage={profileImage} />

        <TitleWrapper>
          <SubTitle2>{'< / >'}</SubTitle2>
          <Title>WOO DAE HYUN</Title>
          <SubTitle>'Dev blog'</SubTitle>
        </TitleWrapper>
      </Wrapper>
    </Background>
  )
}

export default Introduction
