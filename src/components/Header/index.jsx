import {Container,DivTitle,Title,ListCategory,Links,Category} from './styles'
import {Link} from 'react-router-dom'

function Header() {
  return ( 
    <Container>
       <DivTitle>
     
        <Title>Fundo Biblico</Title>
     
       </DivTitle>
     
       <ListCategory>
       
        <Link to="/veu"><Category>Veu</Category></Link>
        <Link to="/hinariocanto"><Category>Hinario de Canto</Category></Link>
        <Link to="/biblia"><Category>Bliblia</Category></Link>
        <Link to="/hinariomusica"><Category>Hinario de Musica</Category></Link>
        <Link to="/diversos"><Category>Diversos</Category></Link>
      
       </ListCategory>
    </Container>
   );
}

export default Header;