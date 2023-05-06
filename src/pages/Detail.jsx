import React from 'react'
import styled from 'styled-components'
function Detail() {
  return (
    <>
      <DetailWrap>
        <DetailFirstItemWrap>
          <DetailFirstItemTitle>토코몬</DetailFirstItemTitle>
          <DetailFirstItem src={`${process.env.PUBLIC_URL}/토코몬.png`} alt="" />
          <DetailBody>
            파닥파닥몬
          </DetailBody>
          <DetailBtnWrap>
            <DetailBtn>수정하기</DetailBtn>
            <DetailBtn color='#FBE8E7'>삭제하기</DetailBtn>
          </DetailBtnWrap>
        </DetailFirstItemWrap>

        <DetailSecondItemWrap>
          <DetailSecondItemtext>댓글</DetailSecondItemtext>
          <DetailSecondItemInput type="text" />
          <DetailSecondItemBtn>등록</DetailSecondItemBtn>
        </DetailSecondItemWrap>
      </DetailWrap>
    </>
  )
}

const DetailWrap = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const DetailFirstItemWrap = styled.div`
  background-color: white;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 8px;
`

const DetailFirstItemTitle = styled.h1`
  font-size: 24px;
  font-weight: 900;
`

const DetailFirstItem = styled.img`
  display: flex;
  height: 200px;
  margin: 0 auto;
`

const DetailBody = styled.p`
  width: 100%;
  height: 200px;
  line-height: 24px;
  background-color: #FBE8E7;
  border-radius: 8px;
  padding: 10px;
  letter-spacing: 1.4px;
  margin-bottom: 20px;
`

const DetailBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`

const DetailBtn = styled.button`
  width: 50%;
  height: 40px;
  border-radius: 8px;
  border: none;
  background-color: ${(props) => {
    return props.color ? '#FFC4D0' : '#F7DDDE'
  }};
    &:hover{
    background-color: ${(props) => {
    return props.color ? 'rgba(255, 196, 208, 0.8)' : 'rgba(247, 221, 222, 0.8)'
  }};
    transition: all 0.3s;
  }
`

const DetailSecondItemWrap = styled.div`
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  margin-top: 20px;
`

const DetailSecondItemtext = styled.p`
  background-color: #F7DDDE;
  padding: 10px;
  border-radius: 8px;
`

const DetailSecondItemInput = styled.input`
  margin-top: 50px;
  height: 30px;
  width: 100%;
  outline: none;
  border: none;
  border-bottom: 1px solid black;
`
const DetailSecondItemBtn = styled.button`
  position: absolute;
  width: 50px;
  height: 25px;
  right: 25px;
  bottom: 25px;
  background-color: white;
  border: 1px solid black;
  cursor: pointer;
  &:hover{
    background-color: #F7DDDE;
    transition: all 0.3s;
  }
`
export default Detail