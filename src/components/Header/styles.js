import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom:20px;
  
  `;

export const DivTitle = styled.div`
  margin-top: 25px ;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  `;

export const DivImg = styled.div`
  width: 400px;
  margin: 15px 0px;
  @media (max-width: 770px) {
    width: 300px;
  }
`;

export const ImageLogo = styled.img`
  width: 100%;
  height: 100%;
`;

export const Title = styled.h1`
  color: #030303;
  font-size: calc(0.4rem + 3.4vw);
  font-weight: bold;
`;

export const Links = styled.a`
  text-decoration: none;
`;

export const ListCategory = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 15px;
  background: #345574;

  @media (max-width: 770px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    width: 100%;
    font-size: 15px;
    padding: 10px 0px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

export const Category = styled.li`
  text-decoration: none;
  color: #dae4f3;
  transition: all 0.3s;
  display: flex;
  margin-left: 26px;
  margin-top: 8px;

  @media (max-width: 770px) {
    padding: 5px 0px;
  }

  :hover {
    color: #838c9b;
  }
`;
