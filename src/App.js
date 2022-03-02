import { Header, ProductDetail, ProductListing } from "./containers";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { NotFound } from "./components/NotFound";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
