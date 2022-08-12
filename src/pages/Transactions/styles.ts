import styled from 'styled-components/native';

export const Container = styled.View`
  
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
  padding-top: 120px;
`;
