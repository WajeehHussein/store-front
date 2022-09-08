import NavBar from "./components/Navbar/NavBar";
import { Categories } from "./components/Categories";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cart from "./components/Cart";
import Product from "./components/Product";
import Data from "./context/data";
function App() {
  return (

    <Data>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Categories />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </Router>
    </Data>

  );
}

export default App;
