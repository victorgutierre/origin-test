import React from 'react';
import { H2 } from './HeadLine.style';

interface Props {
  firstSentence: string;
  boldSentence: string;
}

export const HeadLine: React.FC<Props> = ({ firstSentence, boldSentence }) => {
  return (
    <H2>
      {firstSentence} <strong>{boldSentence}</strong>
    </H2>
  );
};
