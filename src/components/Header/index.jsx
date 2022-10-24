import {
  Container,
  DivImg,
  ImageLogo,
  DivTitle,
  Title,
  ListCategory,
  Category,
} from "./styles";
import { Link } from "react-router-dom";
import Image from "../../assets/Logo_oficial.png";

function Header() {
  return (
    <Container>
      <ListCategory>
        <Link to="/">
          <Category>Pagina Inicial</Category>
        </Link>
        <Link to="/veu">
          <Category>Véus</Category>
        </Link>
        <Link to="/hinariocanto">
          <Category>Hinários de Canto</Category>
        </Link>
        <Link to="/hinariomusica">
          <Category>Hinários de Musica</Category>
        </Link>
        <Link to="/biblia">
          <Category>Bíblias</Category>
        </Link>
        <Link to="/diversos">
          <Category>Diversos</Category>
        </Link>
      </ListCategory>
      <DivTitle>
        <Title>Fundo Biblico</Title>
        <DivImg>
          <Link to="/">
            <ImageLogo src={Image} />
          </Link>
        </DivImg>
      </DivTitle>
    </Container>
  );
}

export default Header;
