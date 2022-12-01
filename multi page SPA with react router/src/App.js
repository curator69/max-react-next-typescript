import { Fragment } from "react/cjs/react.production.min";
import { Route, Routes, Navigate } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <Fragment>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" exact element={<Navigate to="/welcome" />}></Route>
          <Route path="/welcome/*" element={<Welcome />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </main>
    </Fragment>
  );
}

export default App;
