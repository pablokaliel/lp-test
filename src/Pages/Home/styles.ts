import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 120px;
  @media (max-width: 770px) {
    padding: 0px 10px;
  }
  `;
export const Title = styled.h1`
  color:#030303;
  margin-bottom:20px;
  margin-top:10px;
  
`;
export const Description = styled.span`
  color:#030303;
`;
