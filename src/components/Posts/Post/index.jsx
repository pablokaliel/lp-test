import {Item, Title,Price} from './styles'

function Post({title,price}) {
  return ( 
    <Item>
      <Title>{title}</Title>
      <Price>{price}</Price>
    </Item>
   );
}

export default Post;