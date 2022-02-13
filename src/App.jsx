import './App.css'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from './components/Navbar';

import Home from './pages/Home';
import Product from './pages/Product';
import Nofound from './pages/Nofound';

function App() {
  return (
    <>
      <div className="App">
        <div>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/product/:idproduct' element={<Product />} />
              <Route path='/404' element={<Nofound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  )
}

export default App
