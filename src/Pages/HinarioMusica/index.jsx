import {
  Article,
  Container,
  List,
  DivImage,
  Image,
  DivItem,
  Text,
  Small,
  DivTitle,
  Title
} from "./styles";
import IMG1 from "../../assets/franca.png";

function Relatorio() {
  const data = [
    {
      id: 1,
      title: "Hinario de Musica 1",
      description: "R$00.01",
      image: IMG1,
    },
    {
      id: 2,
      title: "Hinario de Musica 2",
      description: "R$00.02",
      image: IMG1,
    },
    {
      id: 3,
      title: "Hinario de Musica 3",
      description: "R$00.03",
      image: IMG1,
    },
    {
      id: 4,
      title: "Hinario de Musica 4",
      description: "R$00.04",
      image: IMG1,
    },
    {
      id: 5,
      title: "Hinario de Musica 5",
      description: "R$00.05",
      image: IMG1,
    },
    {
      id: 6,
      title: "Hinario de Musica 6",
      description: "R$00.06",
      image: IMG1,
    },
    {
      id: 7,
      title: "Hinario de Musica 7",
      description: "R$00.07",
      image: IMG1,
    },
    {
      id: 8,
      title: "Hinario de Musica 8",
      description: "R$00.08",
      image: IMG1,
    },
  ];

  const numberList = data.length;
  return (
    <Container>
      <DivTitle>
        <Title>Hinários para música disponíveis:</Title>
      </DivTitle>
      <List>
        {data
          .slice(0, numberList)
          .map(({ id, image, title, description, }) => {
            return (
              <Article key={id}>
                <DivImage >
                  <Image src={image} alt={title} loading="lazy" />
                </DivImage>
                <DivItem >
                  <Text>{title}</Text>
                  <Small>{description}</Small>
                </DivItem>
              </Article>
            );
          })}
      </List>
    </Container>
  );
}

export default Relatorio;
