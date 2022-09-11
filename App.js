import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Login from './Components/Login';
import Signup from'./Components/Signup';
function App() {
  return (
    <BrowserRouter>
    <Signup/>
    </BrowserRouter>
    

  );
}

export default App;
