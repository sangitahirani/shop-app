import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {useDispatch} from 'react-redux';
import {addNewItem} from '../../store/modules/cart/reducer';
import {IProduct} from '../../types/index';
import {Container, ListContainer, Title, Wrapper} from './styles';
import {Cart} from '../../components/Cart';
import {useEffect, useState} from 'react';
import {getProducts} from '../../api/api';
import {ProductItem} from './ProductItem';

export const Shop = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState();
  const [error, setError] = useState(false);

  const addCartNewItem = (item: IProduct) => {
    dispatch(addNewItem({...item, quantity: 1}));
  };

  //Products API Call
  const getProductsApi = async () => {
    await getProducts()
      .then(res => {
        setProducts(res);
      })
      .catch(() => {
        setError(true);
      });
  };

  useEffect(() => {
    getProductsApi();
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
            {error ? (
              <Title>Unable to fetch data</Title>
            ) : (
              <FlatList
                data={products}
                keyExtractor={(item: any) => item.id}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                ListEmptyComponent={() => {
                  return <ActivityIndicator />;
                }}
                renderItem={({item}) => (
                  <ProductItem
                    item={item}
                    addCartNewItem={(item: IProduct) => {
                      addCartNewItem(item);
                    }}
                  />
                )}
              />
            )}
          </View>
        </ListContainer>
      </Wrapper>
    </Container>
  );
};
