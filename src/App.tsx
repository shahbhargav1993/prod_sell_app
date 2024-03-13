import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { WelcomePage } from './pages/WelcomePage';
//import { NavigationFunction } from "./components/Navbar";
import { PageNotFoundPage } from './components/PageNotfoundPage';
import { AddProductForm } from './pages/ProductForm';
import { AddSellerForm } from './pages/SellerForm';
import './pages/App.css';

function App() {
  return (
    <BrowserRouter> 
      <div className = "App">
        <header className="App-header"></header>
          
          <Routes>
            <Route path="/" element= {<WelcomePage />}/>
            <Route path="/add-product"  element={<AddProductForm />} />
            <Route path="/add-seller"  element={<AddSellerForm />} />
            <Route path="*" element={<PageNotFoundPage />} />
          </Routes>  
      </div>
    </BrowserRouter>
      
  );
}
export default App;    
