import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header'
import Home from './pages/Home/Home';

function App () {

  return (
    <>
    <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/categoria/:category' element={<Home/>}/>
        </Routes>
    </Router>
    </>
  )
}

export default App
