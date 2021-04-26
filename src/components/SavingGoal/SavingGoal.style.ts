import styled from 'styled-components';

export const SavingGoalBox = styled.div`
  display: block;
  width: 100%;
  margin: 0 auto 4rem auto;
  padding: 2.5rem;
  border-radius: 6px;
  box-shadow: 0px 3px 20px 0px rgb(175, 175, 175, 20%);
  background-color: #fff;

  @media screen and (min-width: 768px) {
    width: 600px;
  }
`;

export const Header = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

export const Title = styled.div`
  display: block;
  margin-left: 1.5rem;

  p {
    font-size: 1.5rem;
    font-weight: bold;
  }

  span {
    display: block;
    margin-top: 0.5rem;
    font-size: 1rem;
    color: #748695;
  }
`;

export const FieldsWrapper = styled.div`
  display: block;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
