import "./App.css";

import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartContext/CartProvider";
import Cart from "./components/Cart/Cart";
import ItemsListContainer from "./components/ItemsListContainer/ItemsListContainer";
import ProductFormContainer from "./components/AdminComponents/ProductFormContainer/ProductFormContainer";
import { MainLayouts } from "./layouts/MainLayouts";
import { AdminLayouts } from "./layouts/AdminLayouts";
import { Login } from "./components/Login/Login";
import { RutaProtegida } from "./components/RutaProtegida/RutaProtegida";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          {/* <Header /> */}

          <Routes>
            <Route element={<MainLayouts />}>
              <Route path="/" element={<ItemsListContainer />} />
              <Route path="/detail/:id" element={<ItemDetailContainer />} />
              <Route
                path="/category/:category"
                element={<ItemsListContainer />}
              />
              <Route path="/:category" element={<ItemsListContainer />} />
              <Route path="/carrito" element={<Cart />} />
             </Route>

            <Route path="/admin" element={<AdminLayouts />}>
              <Route index element={<Login />} />
              <Route
                path="alta-productos"
                element={
                  <RutaProtegida>
                    <ProductFormContainer />
                  </RutaProtegida>
                }
              />
            </Route>
          </Routes>

          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
