import React from 'react';
import { Btn } from './Button.style';

interface Props {
  label: string;
}

export const Button: React.FC<Props> = ({ label }) => {
  return <Btn data-testid="button">{label}</Btn>;
};
