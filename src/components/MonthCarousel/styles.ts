import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const ButtonChangeMonth = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const TextMonth = styled.Text`
  font-size: 20px;
  font-family: "Roboto-Medium";
  color: #444;
`;

export const Icon = styled(FontAwesome)`
  font-size: 20px;
`;