import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import CartList from './pages/CartList';
import WishList from './pages/WishList';
import Navbar from './pages/Navbar';

function App() {
  return (
    <div className="App">
      <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cartlist' element={<CartList/>}></Route>
        <Route path='/wishlist' element={<WishList/>}></Route>

      </Routes>
      </>

    </div>
  );
}

export default App;
