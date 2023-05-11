import React from 'react'
import styled, { keyframes } from 'styled-components';
function Character() {
  return (
    <>
      <Image1 src={`${process.env.PUBLIC_URL}/img/gif2-unscreen.gif`}/>
      <Image2 src={`${process.env.PUBLIC_URL}/img/gif3-unscreen.gif`}/>
      <Image3 src={`${process.env.PUBLIC_URL}/img/gif4-unscreen.gif`}/>
      <Image4 src={`${process.env.PUBLIC_URL}/img/gif5-unscreen.gif`}/>
      <Image5 src={`${process.env.PUBLIC_URL}/img/gif6-unscreen.gif`}/>
    </>
  )
}



const gif1 = keyframes`
  0%, 100% {
    transform: translateX(0) rotate(70deg);
  }
  50% {
    transform: translateX(20px)  rotate(70deg);
  }
`;

const Image1 = styled.img`
  width: 100px;
  height: 100px;
  position: absolute;
  top: 100px;
  left: -50px;
  animation: ${gif1} 1s linear infinite;
`;

const gif2 = keyframes`
  0%, 100% {
    transform: translateX(10px) rotate(300deg) translateY(0px);
  }
  50% {
    transform: translateX(0px)  rotate(300deg) translateY(30px);
  }
`;


const Image2 = styled.img`
  width: 100px;
  height: 100px;
  position: absolute;
  top: 200px;
  right: 0px;
  animation: ${gif2} 1s linear infinite;
`;

const gif3 = keyframes`
  0%, 100% {
    transform: translateX(20px) rotate(-40deg);
  }
  50% {
    transform: translateX(70px)  rotate(-40deg);
  }
`;


const Image3 = styled.img`
  width: 100px;
  height: 100px;
  position: absolute;
  top: 550px;
  right: 0px;
  animation: ${gif3} 1s linear infinite;
`;


const gif4 = keyframes`
  0%, 100% {
    transform: translateX(-30px) rotate(50deg);
  }
  50% {
    transform: translateX(-40px)  rotate(50deg);
  }
`;


const Image4 = styled.img`
  width: 100px;
  height: 100px;
  position: absolute;
  top: 370px;
  left: 0px;
  animation: ${gif4} 1s linear infinite;
`;



const gif5 = keyframes`
  0%, 100% {
    transform: translateX(-25px) rotate(50deg);
  }
  50% {
    transform: translateX(-40px)  rotate(50deg);
  }
`;


const Image5 = styled.img`
  width: 100px;
  height: 100px;
  position: absolute;
  top: 670px;
  left: 0px;
  animation: ${gif5} 1s linear infinite;
`;
export default Character