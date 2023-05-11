import React from 'react'
import styled from 'styled-components';
function Footer() {
  return (
    <>
      <MainFooter>
        <FooterLogo src={`${process.env.PUBLIC_URL}/img/Logo.svg`}/>
      </MainFooter>
    </>
  )
}

const MainFooter = styled.footer`
  width: 100%;
  height: 100px;
  background-color: rgb(0, 0, 0);
  display: flex;
  align-items: center;
  padding: 10px;
`

const FooterLogo = styled.img`
  width: 80px;

`
export default Footer