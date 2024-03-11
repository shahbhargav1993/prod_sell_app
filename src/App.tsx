import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import { Welcome } from './components/Welcome';
import { WelcomePage } from './pages/WelcomePage';
import { SellerPage } from './components/SellerPage';
import { ProductPage } from './components/ProductPage';
import { PageNotFoundPage } from './components/PageNotfoundPage';
import { NavigationFunction } from "./components/Navbar";

function App() {
  return (
    <div className = "App">
      <BrowserRouter>
          <NavigationFunction></NavigationFunction>
          <Routes>
            <Route path="/" element= {<WelcomePage></WelcomePage>}/>
            <Route path="/sellers"  element={<SellerPage></SellerPage>} />
            <Route path="/products"  element={<ProductPage></ProductPage>} />
            <Route path="*" element={<PageNotFoundPage></PageNotFoundPage>} />
          </Routes>  
      </BrowserRouter>
      </div>
  );
}
export default App;    
