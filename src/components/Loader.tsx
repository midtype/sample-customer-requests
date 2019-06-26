import React from 'react';
import styled from 'styled-components';

const Styled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .ball-pulse-sync {
    transform: scale(1.2);
  }
  @keyframes ball-pulse-sync {
    33% {
      transform: translateY(10px);
    }
    66% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
  .ball-pulse-sync > div:nth-child(0) {
    animation: ball-pulse-sync 0.6s -0.21s infinite ease-in-out;
  }

  .ball-pulse-sync > div:nth-child(1) {
    animation: ball-pulse-sync 0.6s -0.14s infinite ease-in-out;
  }

  .ball-pulse-sync > div:nth-child(2) {
    animation: ball-pulse-sync 0.6s -0.07s infinite ease-in-out;
  }

  .ball-pulse-sync > div:nth-child(3) {
    animation: ball-pulse-sync 0.6s 0s infinite ease-in-out;
  }

  .ball-pulse-sync > div {
    background-color: black;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    margin: 2px;
    animation-fill-mode: both;
    display: inline-block;
  }
`;

const Loader: React.FC = () => (
  <Styled>
    <div className="ball-pulse-sync">
      <div />
      <div />
      <div />
    </div>
  </Styled>
);

export default Loader;
