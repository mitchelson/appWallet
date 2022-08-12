import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const ButtonNewTransaction = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 30px;

  background-color: #6161ee;

  align-items: center;
  justify-content: center;

  position: absolute;
  z-index: 1;
  
  bottom: 20px;
  right: 20px;
`;

export const FlatList = styled.FlatList`
  width: 100%;
  height: 100%;
  padding: 10px;
`;

export const EmptyContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const EmptyText = styled.Text`
  font-size: 20px;
  font-family: 'Roboto-Bold';
  color: #999;
  text-align: center;
  margin-top: 20px;
`;
