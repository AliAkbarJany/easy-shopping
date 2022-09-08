import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './Pages/Shared/Navbar/Navbar';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import ProductDetail from './Pages/Home/Products/ProductDetail/ProductDetail';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='/productDetail/:id' element={<ProductDetail></ProductDetail>}></Route>

      </Routes>
    </div>
  );
}

export default App;
