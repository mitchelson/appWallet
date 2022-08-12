import React from 'react';
import { Transactions } from '../../models/Transactions';
import { currency } from '../../utils/currency';
import * as S from './styles';

export const TransactionCard: React.FC = (props: Transactions) => {
  return (
    <S.Container type={props.type} status={props.status}>
      <S.Row>
        <S.Row>
          <S.BoxIcon {...props}>
            <S.Icon {...props} />
          </S.BoxIcon>
          <S.Colum>
            <S.Title>{props.title}</S.Title>
            <S.Date>{props.date}</S.Date>
          </S.Colum>
        </S.Row>
        <S.Value {...props}>{`${currency(props.amount, props.type)}`}</S.Value>
      </S.Row>
    </S.Container>
  );
};
