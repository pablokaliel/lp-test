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
  Title
} from "./styles";

import IMG1 from "../../assets/franca.png";

export function Diversos() {
  const data = [
    {
      id: 1,
      title: "Diversos 1",
      description: "R$00.01",
      image: IMG1,
    },
    {
      id: 2,
      title: "Diversos 2",
      description: "R$00.02",
      image: IMG1,
    },
    {
      id: 3,
      title: "Diversos 3",
      description: "R$00.03",
      image: IMG1,
    },
    {
      id: 4,
      title: "Diversos 4",
      description: "R$00.04",
      image: IMG1,
    },
    {
      id: 5,
      title: "Diversos 5",
      description: "R$00.05",
      image: IMG1,
    },
    {
      id: 6,
      title: "Diversos 6",
      description: "R$00.06",
      image: IMG1,
    },
    {
      id: 7,
      title: "Diversos 7",
      description: "R$00.07",
      image: IMG1,
    },
    {
      id: 8,
      title: "Diversos 8",
      description: "R$00.08",
      image: IMG1,
    },
  ];

  const numberList = data.length;
  return (
    <Container>
       <DivTitle>
        <Title>Itens em diversos disponíveis:</Title>
      </DivTitle>
      <List>
        {data
          .slice(0, numberList)
          .map(({ id, image, title, description,}) => {
            return (
              <Article className="portfolio_item" key={id}>
                <DivImage className="portfolio_item-image">
                  <Image src={image} alt={title} loading="lazy" />
                </DivImage>
                <DivItem className="portfolio_item-text">
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
