import { InitialTransactions } from '../../models/Store';
import * as keys from '../keys';

const initialState: InitialTransactions = {
  transactions: [],
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case keys.CLEAR_ALL_DATA: {
      return {
        ...state,
        transactions: [],
      };
    }
    default: {
      return state;
    }
  }
};