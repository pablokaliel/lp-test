import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
  padding: 0px 80px;
  @media (max-width: 770px) {
    padding: 0px 10px;
  }
`;
export const Article = styled.div`
  margin: 20px 0;
  background: #bfd7e1;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const DivImage = styled.div`
  width: 300px;
  height: 360px;
`;
export const DivTitle = styled.div`

`;
export const Title = styled.h2`
color:#030303;
`;
export const Image = styled.img`
  height: 100%;
  width: 100%;
`;
export const DivItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Text = styled.h2`
  color: #030303;
`;
export const Small = styled.span`
  color: #030303;
  margin:10px 0px;
`;
export const DivCta = styled.div``;
export const Reference = styled.a``;
export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.4rem;
  width: 100%;
  border-radius: 8px;
  @media (max-width: 770px) {
    grid-template-columns: 1fr;
  }
`;
