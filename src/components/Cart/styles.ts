import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 5px 10px;
  justify-content: space-between;
`;
export const Slogan = styled.Text`
  flex: 1;
  font-size: ${RFValue(12)}px;
  margin-left: 10px;
  color: white;
`;
export const Wrapper = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;
`;
export const NotificationCart = styled.Text`
  font-size: ${RFValue(12)}px;
  color: red;
  margin-left: 5px;
  padding: 5px;
  border-radius: 20px;
`;
export const ModalLabel = styled.Text`
  font-size: ${RFValue(18)}px;
  color: red;
`;
export const CloseBtn = styled.View`
  width: 100%;
  align-items: flex-end;
  margin-right: 0px;
  background-color: 'red';
`;
