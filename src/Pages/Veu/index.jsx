import {
  Container,
  List,
  Article,
  DivImage,
  Image,
  DivItem,
  Text,
  Small,
  DivTitle,
  Title,
} from "./styles";
import IMG1 from "../../assets/franca.png";
function Veu() {
  const data = [
    {
      id: 1,
      title: "Véu 1",
      description: "R$00.01",
      image: IMG1,
    },
    {
      id: 2,
      title: "Véu 2",
      description: "R$00.02",
      image: IMG1,
    },
    {
      id: 3,
      title: "Véu 3",
      description: "R$00.03",
      image: IMG1,
    },
    {
      id: 4,
      title: "Véu 4",
      description: "R$00.04",
      image: IMG1,
    },
    {
      id: 5,
      title: "Véu 5",
      description: "R$00.05",
      image: IMG1,
    },
    {
      id: 6,
      title: "Véu 6",
      description: "R$00.06",
      image: IMG1,
    },
    {
      id: 7,
      title: "Véu 7",
      description: "R$00.07",
      image: IMG1,
    },
    {
      id: 8,
      title: "Véu 8",
      description: "R$00.08",
      image: IMG1,
    },
  ];

  const numberList = data.length;
  return (
    <Container>
      <DivTitle>
        <Title>Véus disponiveis:</Title>
      </DivTitle>
      <List>
        {data.slice(0, numberList).map(({ id, image, title, description }) => {
          return (
            <Article key={id}>
              <DivImage>
                <Image src={image} alt={title} loading="lazy" />
              </DivImage>
              <DivItem>
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

export default Veu;
