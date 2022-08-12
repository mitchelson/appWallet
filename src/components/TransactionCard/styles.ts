import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import styled from 'styled-components/native';
import { Transaction } from '../../models/Transaction';

export const Container = styled.TouchableOpacity<Transaction>`
  background-color: #fff;
  opacity: ${props => (props.status === 'closed' ? 0.4 : 1)};
  border-radius: 15px;
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  overflow: hidden;
`;

export const BoxIcon = styled.View<Transaction>`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: ${props => props.category.color};
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

export const Icon = styled(FontAwesome).attrs((props: Transaction)=>({
  name: props.category.icon,
  size: 20,
  color: '#fff',
}) as any)`
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Colum = styled.View`

`;

export const Title = styled.Text`
  font-size: 17px;
  font-family: "Roboto-Medium";
`;

export const Value = styled.Text<Transaction>`
  font-size: 18px;
  font-family: "Roboto-Regular";
  color: ${props => props.type === "income" ? "#669966":"#cc6666"};
`;

export const Date = styled.Text`
  font-size: 14px;
  font-family: "Roboto-Light";
`;