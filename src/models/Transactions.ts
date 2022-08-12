export interface Transaction {
  id: string;
  title: string;
  amount: number;
  date: string;
  type: 'income' | 'outcome';
  status: 'open' | 'closed';
  category: CategoryTransaction;
  recurrenceId: string | null;
  installments: number | null;
  installmentsLeft: number | null;
  barcode: string | null;
}

export interface CategoryTransaction{
  id: string;
  title: string;
  icon: string;
  color: string;
}

export interface TransactionList {
  [key: string]: {
    [key: string]: Transaction;
  }
}

// "2020-01": {
//   "123n12h123": {
//     id: "123n12h123",
//     title: string;
//     amount: number;
//     date: string;
//     type: 'income' | 'outcome';
//     status: 'open' | 'closed';
//     category: CategoryTransaction;
//     recurrenceId: string | null;
//     installments: number | null;
//     installmentsLeft: number | null;
//     barcode: string | null;
//   }
// }
// how mount the interface using objects keys
// interface TransactionList {
//   [key: string]: Transaction[];
// }
