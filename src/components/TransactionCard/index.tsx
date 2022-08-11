import React from 'react';
import * as S from './styles';

interface ITransactionCardProps {
  title: string;
  value: number;
  date: string;
  type: 'income' | 'outcome';
  status: 'open' | 'closed';
  category: string;
}

export const TransactionCard: React.FC<ITransactionCardProps> = props => {
  return (
    <S.Container type={props.type} status={props.status}>
      <S.Row>
        <S.Colum>
          <S.Title>{props.title}</S.Title>
          <S.Date>{props.date}</S.Date>
        </S.Colum>
        <S.Value>{`R$ ${props.value}`}</S.Value>
      </S.Row>
    </S.Container>
  );
};
