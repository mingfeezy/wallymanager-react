import logo from './logo.svg';
import './App.css';
import Main from './components/MainComponent';
// import { ConfigureStore } from './redux/configureStore';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;
