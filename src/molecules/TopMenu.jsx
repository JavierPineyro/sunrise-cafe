import React from 'react';
import styled from '@emotion/styled';

import H3 from '../atoms/H3';
import {mediaMinwidth} from '../styles/utils/helpers';

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  margin-top: 1rem;
  ${mediaMinwidth.md} {
    margin-top: 0;
  }
`;

const NavItem = styled.a`
  color: 'inherit';
  text-decoration: none;
  cursor: pointer;
  ${H3} {
    font-size: 1.8rem;
    ${mediaMinwidth.lg} {
      font-size: 2rem;
    }
  }
`;

export const TopMenu = () => {
  return (
    <Nav>
      <NavItem href="/about">
        <H3>ACERCA DE</H3>
      </NavItem>
      <NavItem href="https://frontend.cafe/">
        <H3>FRONTENDCAFE</H3>
      </NavItem>
    </Nav>
  );
};
