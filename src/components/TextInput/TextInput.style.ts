import styled from 'styled-components';

export const TextInputWrapper = styled.div`
  width: 100%;
  margin-bottom: 2rem;

  @media screen and (min-width: 768px) {
    width: 60%;
    margin-right: 2rem;
  }
`;

export const Label = styled.p`
  display: block;
  margin-bottom: 0.5rem;
  color: #202a31;
  font-size: 1rem;
  text-align: left;
`;

export const TextInputBox = styled.div`
  position: relative;

  span {
    position: absolute;
    color: #cdd5db;
    font-size: 1.5rem;
    margin-left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
  }

  input {
    width: 100%;
    height: 4rem;
    padding: 1rem 1rem 1rem 2.5rem;
    font-size: 1.5rem;
    font-weight: bold;
    border-radius: 8px;
    border: 1px solid #eaeef2;
    position: relative;
    outline: 0;
    color: #516473;
  }
`;
