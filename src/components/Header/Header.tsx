import React from 'react';
import { HeaderContainer } from './Header.style';

const logo = require('./../../icons/logo.svg') as string;

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} width="100" height="50" />
    </HeaderContainer>
  );
};
