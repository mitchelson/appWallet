import styled from 'styled-components/native';

interface TransactionCardProps {
  type: 'income' | 'outcome';
  status: 'open' | 'closed';
}

export const Container = styled.TouchableOpacity<TransactionCardProps>`
  background-color: #fff;
  opacity: ${props => (props.status === 'closed' ? 0.4 : 1)};
  border-radius: 15px;
  padding: 10px;
  margin-bottom: 10px;
  border-left-width: 10px;
  border-left-color: ${props => props.type === "income" ? "#0f0":"#f00"};
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
`;

export const Value = styled.Text`
  font-size: 18px;
`;

export const Date = styled.Text``;