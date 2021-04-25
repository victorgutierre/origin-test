import styled from 'styled-components';

export const Btn = styled.button`
  display: block;
  width: 100%;
  max-width: 280px;
  text-align: center;
  cursor: pointer;
  margin: 0 auto;
  padding: 1rem 2rem;
  font-size: 0.9rem;
  font-weight: bold;
  color: #fff;
  border: 0;
  outline: 0;
  border-radius: 30px;
  background-color: #192c8b;

  &:hover {
    background-color: #111f68;
  }
`;

Btn.displayName = 'button';
