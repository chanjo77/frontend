import React from 'react';
import styled, { keyframes } from 'styled-components';
import ballImage from './ball.png'; // 이미지 파일의 경로에 맞게 수정

const Eyes = styled.div`
  display: flex;
  justify-content: center;
`;
const Eye = styled.div`
  width: 200px;
  height: 200px;
  border: 5px solid black;
  border-radius: 50%;
  position: relative;
`;

const moving = keyframes`
  0% {
    top: 30%;
    left: 10%;
  }
  100% {
    top: 30%;
    left: 60%;
  }
`;

const Ball = styled.div`
  width: 80px;
  height: 80px;
  background-image: url(${ballImage});
  background-size: cover;
  border-radius: 50%;
  position: absolute;
  animation: ${moving} 3s 0s linear alternate infinite;
`;

function App() {
  return (
    <Eyes>
      <Eye>
        <Ball />
      </Eye>
      <Eye>
        <Ball />
      </Eye>
    </Eyes>
  );
}

export default App;
