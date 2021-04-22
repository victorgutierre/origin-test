import styled from 'styled-components';
import arrow from './../../icons/arrow.svg';

export const RangeInputWrapper = styled.div`
  width: 100%;
  
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`;

export const Label = styled.p`
  margin-bottom: 0.5rem;
  color: #202a31;
  font-size: 1rem;
  text-align: left;
`;

export const RangeInputBox = styled.div`
  display: flex;
  justify-content: space-between;
  height: 4rem;
  padding: 0.625rem 1rem;
  border-radius: 8px;
  border: 1px solid #eaeef2;
  position: relative;
`;

export const Text = styled.p`
  margin: 0 1rem;
  text-align: center;
  vertical-align: middle;
  color: #748695;

  b {
    display: block;
    color: #000;
    margin-bottom: 0.375rem;
  }
`;

export const Decrease = styled.div`
  display: block;
  cursor: pointer;
  margin-top: 0.5rem;
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${arrow});
`;

export const Increase = styled.div`
  display: block;
  cursor: pointer;
  margin-top: 0.5rem;
  width: 24px;
  height: 24px;
  transform: rotate(180deg);
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${arrow});
`;
