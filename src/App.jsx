import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header'
import Home from './pages/Home/Home';
import ProductDetail from './components/ProductsContainer/ProductDetail/ProductDetail';
import Cart from './components/Cart/Cart';

function App () {
  return (
    <>
    <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/categoria/:category' element={<Home/>}/>
          <Route path='/item/:id' element={<ProductDetail/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
    </Router>
    </>
  )
}

export default App
