import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { NavBar } from "./components/NavBar";
import { Provider } from "./contexts/CartContext";
import { Cart } from "./components/Cart";
import { Error404 } from "./components/Error404";
import { Footer } from "./components/Footer";
import { Checkout } from "./components/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/Category/:id" element={<ItemListContainer />} />
          <Route path="/Item/:id" element={<ItemDetailContainer />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </Provider>
    </BrowserRouter>
  );
}
export default App;
