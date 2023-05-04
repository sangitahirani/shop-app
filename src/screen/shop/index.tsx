import {View, Text, Image, FlatList, Alert} from 'react-native';

import 'intl';
import 'intl/locale-data/jsonp/en';

import {useDispatch} from 'react-redux';
import {addNewItem} from '../../store/modules/cart/reducer';
import {IProduct} from '../../types/index';
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
import {Button} from '../../components/Button';
import {Cart} from '../../components/Cart';
import axios from 'axios';
import {useEffect, useState} from 'react';
export const Shop = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState();

  const addCartNewItem = (item: IProduct) => {
    dispatch(addNewItem({...item, quantity: 1}));
    //dispatch calls the action method
  };
  const getProducts = () => {
    axios
      .get(`https://my-json-server.typicode.com/benirvingplt/products/products`)
      .then(response => {
        console.log(response.data);
        setProducts(response.data);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Container>
      <Text
        style={{
          marginTop: 20,
          fontSize: 20,
          fontWeight: '600',
          color: 'white',
        }}>
        Online Shop
      </Text>
      <Wrapper>
        <ListContainer>
          <Cart />
          <View style={{marginTop: 15}}>
            <FlatList
              data={products}
              keyExtractor={(item: any) => item.id}
              showsVerticalScrollIndicator={false}
              numColumns={2}
              renderItem={({item}) => (
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
              )}
            />
          </View>
        </ListContainer>
      </Wrapper>
    </Container>
  );
};
