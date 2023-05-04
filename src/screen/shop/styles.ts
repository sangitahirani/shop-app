import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  background-color: #351f83;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
export const ListContainer = styled.View`
  width: 100%;
  height: 100%;
  padding: 5px;
`;
export const Wrapper = styled.View`
  margin-top: 10px;
  margin-bottom: ${RFPercentage(10)}px;
`;
export const CardProduct = styled.View`
  background-color: #fff;
  flex-direction: column;
  margin: 10px 10px;
  margin-left : 10px
  width: 45%;
  height: 300px;
  align-items: center;
  border: 1px solid #eaeaea;
  border-radius: 20px;
  justify-content: center;
`;
export const Title = styled.Text`
  font-size: ${RFValue(12)}px;
  margin-left: 10px;
  margin-right: 10px;
  color: black;
`;
export const Brand = styled.Text`
  font-size: ${RFValue(12)}px;
`;
export const Price = styled.Text`
  font-size: ${RFValue(14)}px;
  margin-top: 10px;
  margin-left: 10px;
  color: red;
`;
export const ImageContainer = styled.View`
  flex: 1;
`;
export const Content = styled.View`
  margin-bottom: 10px;
  flex: 1;
`;

export const AddBtn = styled.TouchableOpacity``;
