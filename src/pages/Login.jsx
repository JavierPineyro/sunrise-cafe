import React from 'react';
import styled from '@emotion/styled';

import VercelInfo from '../atoms/VercelInfo';
import {Header} from '../molecules/Header';
import {LoginForm} from '../molecules/LoginForm';
import HomeImage from '../image/homeImage.svg';
import BackgroundCoffee from '../image/backgroundCoffee.svg';
import {mediaMinwidth} from '../styles/utils/helpers';

const Image = styled.img`
  display: none;
  width: 50%;
  max-width: 49rem;
  ${mediaMinwidth.md} {
    display: block;
  }
`;

const LayoutLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  background-image: url(${BackgroundCoffee});
  background-repeat: no-repeat;
  background-position: 100% 100%;
  background-size: 100vh 100%;
`;

const WrapperContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Login() {
  return (
    <LayoutLogin>
      <Header />
      <WrapperContent>
        <LoginForm />
        <Image src={HomeImage} />
      </WrapperContent>
      <Footer>
        <VercelInfo />
      </Footer>
    </LayoutLogin>
  );
}
