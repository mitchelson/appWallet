import React from 'react';
import * as S from './styles';

interface IHeaderProps {
  title: string;
}

const Header: React.FC<IHeaderProps> = ({ title }) => {
  return (
    <S.Container
      blurType="light"
      blurAmount={10}
      reducedTransparencyFallbackColor="white">
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default Header;
