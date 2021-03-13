import React from 'react';
import './App.css';
import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addIncome, addSavings} from './actions/ActionCreators';
import moment from 'moment';

function App() {
  const store = configureStore();
  
  store.dispatch(addIncome({
    income:1000,
    cycle: 7,
    payDay: 0,
    payMonth: 0,
    date: moment('04-24-2020').valueOf()
}));

store.dispatch(addIncome({
    income:2000,
    cycle: 7,
    payDay: 0,
    payMonth: 0,
    date: moment('05-24-2020').valueOf()
}));

store.dispatch(addSavings({
    description:'test', 
    amount:1000,
    frequency: 1,
    enable: true
}));

store.dispatch(addSavings({
  description:'test1', 
  amount:2000,
  frequency: 3,
  enable: true
}));


  return (
    <Provider store={store}>
      <AppRouter/>
    </Provider>
  );
}

export default App;
