import Post from './Post';
import {Container,ListItem} from './styles'

function Posts() {
  const data = [
    {
      id: 1,
      title: "APAE Altinópolis",
      description: "Wordpress",
      github: "",
      demo: "https://apaealtinopolis.com.br",
    },
    {
      id: 2,
      title: "we house",
      description: "Wordpress",
      github: "",
      demo: "https://wehouse.imb.br/",
    },
    {
      id: 3,
      title: "ew esteves",
      description: "Wordpress",
      github: "",
      demo: "https://ewesteves.com.br/",
    },
    {
      id: 4,
      title: "Dogs App - Origamid",
      description: "ReactJs / CSS",
      github:
        "https://github.com/PauloAbrahao/Dogs-Site-para-cachorros-Origamid",
      demo: "",
    },
    {
      id: 5,
      title: "StarBucks - B7 Web",
      description: "HTML / CSS",
      github: "https://github.com/PauloAbrahao/Projeto-Star-Bucks",
      demo: "https://pauloabrahao.github.io/Projeto-Star-Bucks/",
    },
    {
      id: 6,
      title: "Dev Finance - Rocketseat",
      description: "HTML / CSS / Javascript",
      github: "https://github.com/PauloAbrahao/Dev.finance",
      demo: "https://pauloabrahao.github.io/Dev.finance/",
    },
    {
      id: 7,
      title: "Letmeask - Rocketseat",
      description: "ReactJs / TypeScript / Firebase",
      github: "https://github.com/PauloAbrahao/Letmeask",
      demo: "",
    },
    {
      id: 8,
      title: "Memory Game - Net Ninja",
      description: "ReactJs / CSS",
      github: "https://github.com/PauloAbrahao/Memory-game",
      demo: "",
    },
  ];

  const numberList =  data.length ;

  return ( 
    <Container>
      <ListItem>
  {data
            .slice(0, numberList)
            .map(({ id, image, title, description, github, demo }) => {
              return (
                <article className="portfolio_item" key={id}>
                  <div className="portfolio_item-image">
                    <img src={image} alt={title} loading="lazy" />
                  </div>
                  <div className="portfolio_item-text">
                    <h3>{title}</h3>
                    <small>{description}</small>
                    <div className="portfolio_item-cta">
                      {github ? (
                        <a href={github} className="btn" target="_blank">
                          Github
                        </a>
                      ) : (
                        ""
                      )}

                      {demo ? (
                        <a href={demo} className="btn btn_site" target="_blank">
                          Site
                        </a>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
     
      </ListItem>
    </Container>
   );
}

export default Posts;