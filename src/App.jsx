import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Main } from './Components/Main';
import { SignIn } from './Components/SignIn';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='sign-in' element={<SignIn />} />
        <Route path='/' element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
