import styled from 'styled-components';

export const H2 = styled.h2`
  display: block;
  text-align: center;
  padding: 2rem;
  color: #1d34a1;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 400;

  @media screen and (min-width: 768px) {
    padding: 2.8rem 0 1.5rem 0;
  }
`;

H2.displayName = 'h2';
