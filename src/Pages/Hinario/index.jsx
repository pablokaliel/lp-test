import Posts from "../../components/Posts";
import {
  Container,
  List,
  Article,
  DivImage,
  Image,
  DivItem,
  Text,
  Small,
  DivCta,
  Reference,
  DivTitle,
  Title
} from "./styles";
import IMG1 from "../../assets/franca.png";

function Hinario() {
  const data = [
    {
      id: 1,
      title: "Hinario canto 1",
      description: "R$00.01",
      image: IMG1,
    },
    {
      id: 2,
      title: "Hinario canto 2",
      description: "R$00.02",
      image: IMG1,
    },
    {
      id: 3,
      title: "Hinario canto 3",
      description: "R$00.03",
      image: IMG1,
    },
    {
      id: 4,
      title: "Hinario canto 4",
      description: "R$00.04",
      image: IMG1,
    },
    {
      id: 5,
      title: "Hinario canto 5",
      description: "R$00.05",
      image: IMG1,
    },
    {
      id: 6,
      title: "Hinario canto 6",
      description: "R$00.06",
      image: IMG1,
    },
    {
      id: 7,
      title: "Hinario canto 7",
      description: "R$00.07",
      image: IMG1,
    },
    {
      id: 8,
      title: "Hinario canto 8",
      description: "R$00.08",
      image: IMG1,
    },
  ];

  const numberList = data.length;
  return (
    <Container>
       <DivTitle>
        <Title>Hinários para Canto disponíveis:</Title>
      </DivTitle>
      <List>
        {data
          .slice(0, numberList)
          .map(({ id, image, title, description, github, demo }) => {
            return (
              <Article className="portfolio_item" key={id}>
                <DivImage className="portfolio_item-image">
                  <Image src={image} alt={title} loading="lazy" />
                </DivImage>
                <DivItem className="portfolio_item-text">
                  <Text>{title}</Text>
                  <Small>{description}</Small>
                  <DivCta className="portfolio_item-cta">
                    {github ? (
                      <Reference href={github} className="btn" target="_blank">
                        Github
                      </Reference>
                    ) : (
                      ""
                    )}
                  </DivCta>
                </DivItem>
              </Article>
            );
          })}
      </List>
    </Container>
  );
}

export default Hinario;
