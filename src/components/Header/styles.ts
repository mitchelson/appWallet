import { getStatusBarHeight, isIphoneX } from "react-native-iphone-x-helper";
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  padding-top: ${isIphoneX() ? getStatusBarHeight() : 0}px;
  height: 100px;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  overflow: hidden;
`;


export const Title = styled.Text`
  font-size: 20px;
  color: #000;
`;
