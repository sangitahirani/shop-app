import {
  Container,
  ListContainer,
  Wrapper,
  CardProduct,
  ImageContainer,
  Content,
  Title,
  Brand,
  Price,
} from './styles';
import {IProduct} from '../../types/index';
import {Image} from 'react-native';
import {Button} from '../../components/Button';
import 'intl';
import 'intl/locale-data/jsonp/en';

type Props = {
  item: IProduct;
  addCartNewItem: Function;
};
export function ProductItem({item, addCartNewItem}: Props) {
  return (
    <CardProduct>
      <ImageContainer>
        <Image
          style={{
            height: 100,
            width: 80,
            top: 20,
            left: 0,
            right: 0,
          }}
          source={{uri: item.img}}
        />
      </ImageContainer>
      <Content>
        <Title numberOfLines={2}>{item.name}</Title>
        <Price>
          {Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(item.price)}
        </Price>

        <Button
          title="Add cart"
          icon="plus-circle"
          onPress={() => addCartNewItem(item)}
        />
      </Content>
    </CardProduct>
  );
}
