import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header'
import Home from './pages/Home/Home';
import ProductDetail from './components/ProductsContainer/ProductDetail/ProductDetail';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';

function App () {
  return (
    <>
    <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/categoria/:category' element={<Home/>}/> {/* FIJARSE COMO ADMNISTRAR BIEN LAS CATEGORIAS CON EL ROUTING Y ARREGLAR LAS VISTAS DEL ROUTING */}
          <Route path='/item/:id' element={<ProductDetail/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
        <Footer/>
    </Router>
    </>
  )
}

export default App
