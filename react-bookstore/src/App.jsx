
import "./App.css";
import Footer from "./Footer.jsx";
import Header from "./Headeer.jsx";
import Cart from "./Cart.jsx";
import ProductList from "./ProductList.jsx";

function App() {
  return (
  



 <div className="container">
 <Header />
 <div className="row">
 <div className="col-md-8">
  <ProductList />
  <ProductList />
  <ProductList />

 </div>
 <div className="col-md-4">
 <Cart />
 </div>
 </div>
 <Footer />
 </div>
 
  );
}

export default App;
