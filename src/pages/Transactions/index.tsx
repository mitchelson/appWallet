import { useNavigation } from '@react-navigation/native';
import dayjs from 'dayjs';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import { MonthCarousel } from '../../components/MonthCarousel';
import { TransactionCard } from '../../components/TransactionCard';
import { Store } from '../../models/Store';
import * as S from './styles';

export const Transactions: React.FC = () => {
  const { navigate } = useNavigation();
  const { transactions } = useSelector((state: Store) => state.transactions);

  const [actualMonth, setActualMont] = React.useState(
    dayjs().format('YYYY-MM'),
  );

  const navigateToEdit = (id: string) => {
    navigate('EditTransaction' as never);
  };

  const renderEmpty = () => {
    return (
      <S.EmptyContainer>
        <FontAwesome name="money-bill-wave" size={50} color="#c0c0c0" />
        <S.EmptyText>Não há transações{`\n`}neste mês!</S.EmptyText>
      </S.EmptyContainer>
    );
  };

  return (
    <S.Container>
      <Header title="Transações" />
      <MonthCarousel changeMonth={item => setActualMont(item)} />
      <S.ButtonNewTransaction onPress={navigateToEdit}>
        <FontAwesome name="plus" size={24} color="#fff" />
      </S.ButtonNewTransaction>
      {transactions[actualMonth] &&
      Object.keys(transactions[actualMonth]).length > 0 ? (
        <S.FlatList
          data={Object.keys(transactions[actualMonth]) || []}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <TransactionCard {...transactions[actualMonth][item]} />
          )}
        />
      ) : (
        renderEmpty()
      )}
    </S.Container>
  );
};
