
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Products from './Products';
import Users from './Users';
import Orders from './Orders';
import Analysis from './Analysis';

function App() {
  return (<BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<div><Header /><Products /></div>} />
        <Route path='/user' element={<div><Header /><Users /></div>} />
        <Route path='/orders' element={<div><Header /><Orders /></div>} />
        <Route path='/analysis' element={<div><Header /><Analysis /></div>} />
      </Routes>
    </div></BrowserRouter>
  );
}

export default App;
