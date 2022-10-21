import styled from 'styled-components';

export const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
padding:20px 0px;

`;


export const DivTitle = styled.div`
padding: 5px 0px;

`;
export const Title = styled.h1`
color:#030303;
`;
export const Links = styled.a`
text-decoration:none;
`;
export const ListCategory = styled.ul`

list-style:none;
display:flex;
justify-content:space-between;
width:80%;
padding: 15px;
background: #345574;
border-radius:4px;


@media (max-width: 770px) {
  width:100%;
  font-size:15px;
  padding:10px 0px;
  height:150px;
  
  flex-wrap:wrap;
  align-items:center;
  justify-content:center;
  align-items:center;
 
}
`;
export const Category = styled.li`
text-decoration:none;
color:#dae4f3;
transition: all 0.3s;

@media (max-width: 770px){
  padding:5px 20px;
}

:hover{
  color:#838c9b;
}
`;
