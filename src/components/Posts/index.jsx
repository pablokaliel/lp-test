import Post from './Post';
import {Container,ListItem} from './styles'
import {default as hinario} from '../../hinario.json'

function Posts() {

  return ( 
    <Container>
      <ListItem>
      {hinario.map((item)=>{
        return(
          <Post title={item.title} price={item.price}/>
        );
      })}
     
      </ListItem>
    </Container>
   );
}

export default Posts;