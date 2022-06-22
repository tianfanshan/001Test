import './App.css';

import Login from './components/Login/Login'
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile';

import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { UserProvider } from './context/UserContext/UserStates'



import 'antd/dist/antd.css'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <UserProvider>
        <Header />
      <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/profile' element={<Profile/>}/>
      </Routes>
      </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
