import styled from 'styled-components';

export const TotalAmountWrapper = styled.div`
  display: block;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;
  border-radius: 8px;
  border: 1px solid #eaeef2;

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`;

export const TotalAmountTopInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
`;

export const TotalAmountDescription = styled.p`
  font-size: 1.2rem;
  color: #202a31;

  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const TotalAmountValue = styled.p`
  text-align: right;
  font-size: 1.7rem;
  font-weight: bold;
  color: #2f7af6;

  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const TotalAmountDetails = styled.div`
  display: block;
  padding: 2rem;
  font-size: 0.875rem;
  line-height: 1.2rem;
  text-align: center;
  background-color: #eaeef2;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;
