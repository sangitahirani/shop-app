import {useState} from 'react';
import {Modal, StyleSheet, View, Image, ScrollView} from 'react-native';

import {useSelector} from 'react-redux';
import {cardStateData} from '../../store/modules/cart/reducer';

import {useDispatch} from 'react-redux';
import {removeCartItem} from '../../store/modules/cart/reducer';
//todo: check about duplication imports

import {
  Container,
  Slogan,
  Wrapper,
  NotificationCart,
  CloseBtn,
  ModalLabel,
} from './styles';
import Feather from 'react-native-vector-icons/Feather';
import {Button} from '../Button';
import {Title} from '../../screen/shop/styles';

export function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const cart = useSelector(cardStateData);
  var total: number = 0;
  cart.map(item => {
    return (total += item.quantity);
  });
  const dispatch = useDispatch();
  const removeCartItemShop = (index: number) => {
    dispatch(removeCartItem(index));
  };
  return (
    <Container>
      <Modal
        animationType="slide"
        visible={isOpen}
        transparent={true}
        onRequestClose={() => setIsOpen(false)}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <CloseBtn>
              <Feather
                name="x-square"
                size={20}
                color="#111729"
                onPress={() => setIsOpen(false)}
              />
            </CloseBtn>
            <ModalLabel>Your Cart</ModalLabel>
            <Title style={{marginTop: 10}}>You have {cart.length} items </Title>
            {cart.length > 0 ? (
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={{width: '100%', height: '80%', marginTop: 10}}>
                {cart.map((item, index) => (
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 10,
                      marginBottom: 5,
                      borderColor: 'grey',
                      borderWidth: 2,
                    }}
                    key={item.id}>
                    <View style={{marginTop: 50}}>
                      <Title>{item.name}</Title>
                    </View>
                    <View style={{marginVertical: 20}}>
                      <Title>{`Quantity : ${item.quantity?.toFixed(0)}`}</Title>
                    </View>
                    <Image
                      style={{
                        height: 150,
                        width: 150,
                        top: 2,
                        left: 0,
                        right: 0,
                      }}
                      source={{uri: item.img}}
                    />
                    <View style={{marginVertical: 16}}>
                      <Button
                        title="Remove item"
                        icon="delete"
                        onPress={() => removeCartItemShop(index)}></Button>
                    </View>
                  </View>
                ))}
              </ScrollView>
            ) : null}
          </View>
        </View>
      </Modal>
      <Wrapper onPress={() => setIsOpen(true)}>
        <Slogan>Go to Your cart -</Slogan>
        <Feather name="shopping-cart" size={16} color={'white'} />
        <NotificationCart>{total}</NotificationCart>
      </Wrapper>
    </Container>
  );
}
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20,
    elevation: 20,
  },
});
