import { Transactions } from "./Transactions";

export interface Store{
  transactions: InitialTransactions;
}

export interface InitialTransactions{
  transactions: Transactions[];
}