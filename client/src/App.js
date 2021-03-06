import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import CreateAccount from './components/accounts/CreateAccount.js';
import MyAccount from './pages/MyAccount';
import TopNav from './TopNav';
import LeftNav from './LeftNav';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <TopNav/>
        <div className='container-contents-left-side'>
          <LeftNav/>
        </div>
        <Routes>
          <Route element={<Home/>} path={"/"}/>
          <Route element={<CreateAccount/>} path={"/create_account"}/>
          <Route element={<MyAccount/>} path={"/users/:username"}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
