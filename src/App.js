import NavBar from "./components/Navbar/NavBar";
import { Products } from "./components/Products";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cart from "./components/Cart";
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/Cart" element={<Cart />} />
        <Route path="/" element={<Products />} />
      </Routes>
      {/* <Products /> */}
    </Router>
  );
}

export default App;
