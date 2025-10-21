 import "./App.css";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Gallery from "./components/Gallery/Gallery";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartContext/CartProvider";

function App() {
  return (
    <>
      <BrowserRouter>
      <CartProvider> 
        <Header />
        <Nav />
        <Routes>
            <Route path='/' element={  <Main />}/>            
            <Route path='/detail/:id' element={<ItemDetailContainer />} />   
            <Route path='/ofertas' element={<Main />} />                      
          </Routes>        
         <Footer />
         </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
