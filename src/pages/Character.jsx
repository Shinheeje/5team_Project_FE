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
      <Image6 src={`${process.env.PUBLIC_URL}/img/gif7-unscreen.gif`}/>
      <Image7 src={`${process.env.PUBLIC_URL}/img/gif8-unscreen.gif`}/>
      <Image8 src={`${process.env.PUBLIC_URL}/img/gif9-unscreen.gif`}/>
      <Image9 src={`${process.env.PUBLIC_URL}/img/gif10.gif`}/>
      <Image11 src={`${process.env.PUBLIC_URL}/img/gif12.gif`}/>
      <Image12 src={`${process.env.PUBLIC_URL}/img/gif13.gif`}/>
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
  top: 350px;
  right: 0px;
  animation: ${gif2} 1s linear infinite;
`;

const gif3 = keyframes`
  0%, 100% {
    transform: translateX(30px) rotate(-40deg);
  }
  50% {
    transform: translateX(55px)  rotate(-40deg);
  }
`;


const Image3 = styled.img`
  width: 100px;
  height: 100px;
  position: absolute;
  top: 100px;
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
  top: 550px;
  left: 0px;
  animation: ${gif5} 1s linear infinite;
`;


const gif6 = keyframes`
  0%, 100% {
    transform: translateX(50px) rotate(-60deg);
  }
  50% {
    transform: translateX(60px)  rotate(-60deg);
  }
`;


const Image6 = styled.img`
  width: 150px;
  height: 100px;
  position: absolute;
  top: 700px;
  right: 0px;
  animation: ${gif6} 1s linear infinite;
`;

const gif7 = keyframes`
  0%, 100% {
    transform: translateX(60px) rotate(-65deg);
  }
  50% {
    transform: translateX(70px)  rotate(-65deg);
  }
`;


const Image7 = styled.img`
  width: 200px;
  height: 100px;
  position: absolute;
  top: 990px;
  right: 0px;
  animation: ${gif7} 1s linear infinite;
`;

const gif8 = keyframes`
  0%, 100% {
    transform: translateX(-80px) rotate(100deg);
  }
  50% {
    transform: translateX(-90px)  rotate(100deg);
  }
`;


const Image8 = styled.img`
  width: 200px;
  height: 100px;
  position: absolute;
  top: 750px;
  left: 0px;
  animation: ${gif8} 1s linear infinite;
`;


const gif9 = keyframes`
  0%, 100% {
    transform: translateX(-80px) rotate(100deg);
  }
  50% {
    transform: translateX(-90px)  rotate(100deg);
  }
`;


const Image9 = styled.img`
  width: 200px;
  height: 100px;
  position: absolute;
  bottom: 330px;
  left: 0px;
  animation: ${gif9} 1s linear infinite;
`;

const gif11 = keyframes`
  0%, 100% {
    transform: translateX(-30px) rotate(0deg);
  }
  50% {
    transform: translateX(-30px)  rotate(0deg);
  }
`;


const Image11 = styled.img`
  width: 200px;
  height: 100px;
  position: absolute;
  bottom: 0px;
  right: 40px;
  animation: ${gif11} 1s linear infinite;
`;


const gif12 = keyframes`
  0%, 100% {
    transform: translateX(-30px) rotate(0deg);
  }
  50% {
    transform: translateX(-30px)  rotate(0deg);
  }
`;


const Image12 = styled.img`
  width: 200px;
  height: 100px;
  position: absolute;
  bottom: 0px;
  left: 140px;
  animation: ${gif12} 1s linear infinite;
`;

export default Character