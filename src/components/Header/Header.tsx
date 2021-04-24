import React from 'react';
import { HeaderContainer } from './Header.style';
interface Props {
  logo: string;
}

export const Header: React.FC<Props> = ({ logo }) => (
  <HeaderContainer data-testid="header">
    <img src={logo} width="100" height="50" data-testid="header-logo" />
  </HeaderContainer>
);
