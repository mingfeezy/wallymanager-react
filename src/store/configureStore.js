import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import BillsReducer from '../reducers/bills';
import IncomeReducer from '../reducers/income';
import ProfileReducer from '../reducers/profile';
import SavingsReducer from '../reducers/savings';
import FiltersReducer from '../reducers/filters';
import ManagementReducer from '../reducers/management';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
    const store = createStore(
        combineReducers({
            bills: BillsReducer,
            income: IncomeReducer,
            profile: ProfileReducer,
            savings: SavingsReducer,
            management: ManagementReducer,
            filters:FiltersReducer
        }), 
            composeEnhancer(applyMiddleware(thunk))

         
    
    );
    return store;
}
