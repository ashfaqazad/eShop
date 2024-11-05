import './App.css';
import Header from './Pages/Header';
import Home from './Pages/Home';
import Footer from './Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from './Pages/Checkout';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

function App() {
  return (

    <BrowserRouter>
      <Header />

      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />

        </Routes>
      </div>

      <Footer />
    </BrowserRouter>



  );
}

export default App;
