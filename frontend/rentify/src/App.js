import './App.css';
import { Routes,Route, Link, BrowserRouter } from 'react-router-dom'; 
import Navbar from './Components/Navbar/Navbar';
import { Buyer } from './Components/Buyer/Buyer';
import { Seller } from './Components/Seller/Seller';
import { Newuser } from './Components/Newuser/Newuser';
import { Home } from './Components/Home/Home';
import { Sellerpost } from './Components/Seller/Sellerpost';
import { Sellernewpost } from './Components/Seller/Sellernewpost';
import { SellerUpdate } from './Components/Seller/SellerUpdate';
function App() {
  return (
    <BrowserRouter>
    <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/seller' element={<Seller/>}/>
         <Route path='/buyer' element={<Buyer/>}/>
         <Route path='/newuser' element={<Newuser/>}/>
         <Route path='/sellerpost' element={<Sellerpost/>}/>
         <Route path='/sellernewpost' element={<Sellernewpost/>}/>
         <Route path='/sellerupdatepost/:id' element={<SellerUpdate/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
