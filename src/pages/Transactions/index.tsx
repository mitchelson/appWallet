import { useNavigation } from '@react-navigation/native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Header from '../../components/Header';
import { TransactionCard } from '../../components/TransactionCard';
import { Transactions as TransactionModel } from '../../models/Transactions';
import * as S from './styles';

const transactions: TransactionModel[] = [
  {
    id: '1',
    title: 'Lazer',
    amount: 20000,
    date: '2020-01-01',
    type: 'outcome',
    status: 'closed',
    category: {
      id: '1',
      title: 'Lazer',
      color: '#ea7d7d',
      icon: 'shopping-cart',
    },
  },
  {
    id: '2',
    title: 'Almoço',
    amount: 10000,
    date: '2020-01-01',
    type: 'outcome',
    status: 'open',
    category: {
      id: '1',
      title: 'Lazer',
      color: '#ea7d7d',
      icon: 'shopping-cart',
    },
  },
  {
    id: '3',
    title: 'Salário',
    amount: 900000,
    date: '2020-01-01',
    type: 'income',
    status: 'open',
    category: {
      id: '1',
      title: 'Lazer',
      color: '#ea7d7d',
      icon: 'shopping-cart',
    },
  },
  {
    id: '5',
    title: 'Almoço',
    amount: 10000,
    date: '2020-01-01',
    type: 'outcome',
    status: 'open',
    category: {
      id: '1',
      title: 'Lazer',
      color: '#ea7d7d',
      icon: 'shopping-cart',
    },
  },
  {
    id: '6',
    title: 'Lazer',
    amount: 20000,
    date: '2020-01-01',
    type: 'outcome',
    status: 'open',
    category: {
      id: '1',
      title: 'Lazer',
      color: '#ea7d7d',
      icon: 'shopping-cart',
    },
  },
];

export const Transactions: React.FC = () => {
  const { navigate } = useNavigation();

  const navigateToEdit = (id: string) => {
    navigate('EditTransaction' as never);
  };

  return (
    <S.Container>
      <Header title="Transações" />
      <S.ButtonNewTransaction onPress={navigateToEdit}>
        <FontAwesome name="plus" size={24} color="#fff" />
      </S.ButtonNewTransaction>
      <S.FlatList
        data={transactions}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <TransactionCard {...item} />}
      />
    </S.Container>
  );
};
