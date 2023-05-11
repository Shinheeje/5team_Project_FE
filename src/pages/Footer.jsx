import React from 'react'
import styled from 'styled-components';
function Footer() {
  return (
    <>
      <MainFooter>
        <FooterLogo src={`${process.env.PUBLIC_URL}/img/Logo.svg`} />
        <FooterContent>
          <FooterContentItem>5조5억</FooterContentItem>
          <FooterContentItem2>
            <BackendBox>
              <h1>Back-end</h1>
              <p>이재호</p>
              <p>조유민</p>
              <p>김은양</p>
              <p>유명근</p>
            </BackendBox>
            <FrontendBox>
              <h1>front-end</h1>
              <p>신희제</p>
              <p>조선아</p>
            </FrontendBox>
          </FooterContentItem2>
        </FooterContent>
      </MainFooter>
    </>
  )
}

const MainFooter = styled.footer`
  width: 100%;
  height: 100px;
  background-color: rgb(0, 0, 0);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  position: relative;
`

const FooterLogo = styled.img`
  width: 80px;
`

const FooterContent = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
`

const FooterContentItem = styled.p`
  font-size: 14px;
  font-weight: 900;
  color: white;
`

const FooterContentItem2 = styled.div`
  color: white;
  display: flex;
  gap: 10px;
  position: absolute;
  right: 60px;
  top: 0px;
`

const BackendBox = styled.div`
  width: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  h1 {
    font-size: 12px;
    font-weight: 900;
  }

  p {
    font-size: 10px;
  }
`

const FrontendBox = styled.div`
  width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  h1 {
    font-size: 12px;
    font-weight: 900;
  }

  p {
    font-size: 10px;
  }
`
export default Footer