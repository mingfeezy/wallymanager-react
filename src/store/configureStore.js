import { createStore, combineReducers } from 'redux';
import BillsReducer from '../reducers/bills';
import IncomeReducer from '../reducers/income';
import ProfileReducer from '../reducers/profile';
import SavingsReducer from '../reducers/savings';

export default () => {
    const store = createStore(
        combineReducers({
            bills: BillsReducer,
            income: IncomeReducer,
            profile: ProfileReducer,
            savings: SavingsReducer
        })
    );
    return store;
}