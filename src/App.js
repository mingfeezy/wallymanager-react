import React from 'react';
import './App.css';
import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addIncome, addSavings, getBalance} from './actions/ActionCreators';
import moment from 'moment';

function App() {
  const store = configureStore();
  

store.dispatch(addIncome({
    income:'5000',
    cycle: '30',
    payDay: '01',
    payMonth: '3',
    date: moment('03-01-2021').valueOf()
}));

store.dispatch(getBalance({
  bills:"0",
  income:"50000",
  
}))


/*
store.dispatch(addSavings({
    description:'test', 
    amount:1000,
    frequency: 1,
    enable: true
}));

store.dispatch(addSavings({
  description:'test1', 1
  amount:2000,
  frequency: 3,
  enable: true
}));
*/

  return (
    <Provider store={store}>
      <AppRouter/>
    </Provider>
  );
}

export default App;
