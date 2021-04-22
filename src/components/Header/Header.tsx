import React from 'react';
import * as S from './Header.style';
import logo from './../../icons/logo.svg';

export const Header = () => {
  return (
    <S.Header>
      <img src={logo} width="100" height="50" />
    </S.Header>
  );
};
