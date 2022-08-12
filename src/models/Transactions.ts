export interface Transactions{
  id: string;
  title: string;
  amount: number;
  date: string;
  type: 'income' | 'outcome';
  status: 'open' | 'closed';
  category: CategoryTransaction;
}

export interface CategoryTransaction{
  id: string;
  title: string;
  icon: string;
  color: string;
}