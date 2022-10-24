import {
  Article,
  Container,
  List,
  DivImage,
  Image,
  DivItem,
  Text,
  Small,
  DivTitle,Title
} from "./styles";

import IMG1 from "../../assets/franca.png";

function Biblia() {

  const data = [
    {
      id: 1,
      title: "Biblia 1",
      description: "R$00.01",
      image: IMG1,
    },
    {
      id: 2,
      title: "Biblia 2",
      description: "R$00.02",
      image: IMG1,
    },
    {
      id: 3,
      title: "Biblia 3",
      description: "R$00.03",
      image: IMG1,
    },
    {
      id: 4,
      title: "Biblia 4",
      description: "R$00.04",
      image: IMG1,
    },
    {
      id: 5,
      title: "Biblia 5",
      description: "R$00.05",
      image: IMG1,
    },
    {
      id: 6,
      title: "Biblia 6",
      description: "R$00.06",
      image: IMG1,
    },
    {
      id: 7,
      title: "Biblia 7",
      description: "R$00.07",
      image: IMG1,
    },
    {
      id: 8,
      title: "Biblia 8",
      description: "R$00.08",
      image: IMG1,
    },
  ];

  const numberList = data.length;
  return (
    <Container>
       <DivTitle>
        <Title>Bíblias disponíveis:</Title>
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

export default Biblia;
