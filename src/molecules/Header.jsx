import React from 'react';
import styled from '@emotion/styled';

import {CoffeeBanner} from '../atoms/CoffeeBanner';
import {mediaMinwidth} from '../styles/utils/helpers';

import {TopMenu} from './TopMenu';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 0 1.6rem;
  ${mediaMinwidth.sm} {
    flex-direction: row;
  }
  ${mediaMinwidth.md} {
    padding: 0 2rem;
  }
`;

export const Header = () => {
  return (
    <Container>
      <CoffeeBanner />
      <TopMenu />
    </Container>
  );
};
