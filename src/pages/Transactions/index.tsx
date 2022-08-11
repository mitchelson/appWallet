import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Header from '../../components/Header';
import { TransactionCard } from '../../components/TransactionCard';
import * as S from './styles';

const transactions = [
  {
    id: '1',
    title: 'Lazer',
    value: 200,
    date: '2020-01-01',
    type: 'outcome',
    status: 'closed',
    category: 'Lazer',
  },
  {
    id: '2',
    title: 'Almoço',
    value: 100,
    date: '2020-01-01',
    type: 'outcome',
    status: 'open',
    category: 'Lazer',
  },
  {
    id: '3',
    title: 'Lazer',
    value: 200,
    date: '2020-01-01',
    type: 'outcome',
    status: 'open',
    category: 'Lazer',
  },
  {
    id: '5',
    title: 'Almoço',
    value: 100,
    date: '2020-01-01',
    type: 'outcome',
    status: 'open',
    category: 'Lazer',
  },
  {
    id: '6',
    title: 'Lazer',
    value: 200,
    date: '2020-01-01',
    type: 'outcome',
    status: 'open',
    category: 'Lazer',
  },
];

export const Transactions: React.FC = () => {
  const { navigate } = useNavigation();
  return (
    <S.Container>
      <Header title="Transações" />
      <S.ButtonNewTransaction
        onPress={() => navigate('EditTransaction' as never)}>
        <FontAwesome name="plus" size={24} color="#fff" />
      </S.ButtonNewTransaction>
      <FlatList
        data={transactions}
        style={{ width: '100%', height: '100%', padding: 10, paddingTop: 120 }}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <TransactionCard {...item} />}
      />
    </S.Container>
  );
};
