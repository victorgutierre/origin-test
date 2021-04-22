import styled from 'styled-components';

export const RangeInputWrapper = styled.div`
  width: 40%;
`;

export const Label = styled.p`
  display: block;
  margin-bottom: 0.5rem;
  color: #202a31;
  font-size: 1rem;
  text-align: left;
`;

export const RangeInputBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #eaeef2;
  position: relative;
`;

export const Text = styled.p`
  color: red;
  margin: 0 1rem;
  text-align: center;
  vertical-align: middle;
  color: #748695;

  b {
    display: block;
    color: #000;
    margin-bottom: 0.5rem;
  }
`;

export const Decrease = styled.div`
  cursor: pointer;

  &:before,
  &:after {
    content: '';
    display: block;
    height: 1rem;
    margin-top: -13px;
    position: absolute;
    transform: rotate(-135deg);
    left: 1rem;
    top: 50%;
    width: 0;
    border-right: 2px solid #8d9ca8;
  }

  &:after {
    margin-top: -3px;
    transform: rotate(-45deg);
  }
`;

export const Increase = styled.div`
  cursor: pointer;

  &:before,
  &:after {
    content: '';
    display: block;
    height: 1rem;
    margin-top: -13px;
    position: absolute;
    transform: rotate(135deg);
    right: 1rem;
    top: 50%;
    width: 0;
    border-right: 2px solid #8d9ca8;
  }

  &:after {
    margin-top: -3px;
    transform: rotate(45deg);
  }
`;
