import {Article,DivImage,Image,DivItem,Text,Small,DivCta,Reference} from './styles'

function Biblia() {
  const data = [
    {
      id: 1,
      title: "Biblia 1",
      description: "R$00.01",
      imageURL: "",
    },
    {
      id: 2,
      title: "Biblia 2",
      description: "R$00.02",
      imageURL: "",
    },
    {
      id: 3,
      title: "Biblia 3",
      description: "R$00.03",
      imageURL: "",
    },
    {
      id: 4,
      title: "Biblia 4",
      description: "R$00.04",
      imageURL: "",
    },
    {
      id: 5,
      title: "Biblia 5",
      description: "R$00.05",
      imageURL: "",
    },
    {
      id: 6,
      title: "Biblia 6",
      description: "R$00.06",
      imageURL: ""
    },
    {
      id: 7,
      title: "Biblia 7",
      description: "R$00.07",
      imageURL: ""
    },
    {
      id: 8,
      title: "Biblia 8",
      description: "R$00.08",
      imageURL: ""
    },
  ];

  const numberList =  data.length ;
  return ( 
    <div>
    <ul>
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
   
    </ul>
  </div>
   );
}

export default Biblia;