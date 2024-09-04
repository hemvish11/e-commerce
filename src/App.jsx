import "./App.css";
import Cart from "./customer/components/Cart/Cart.jsx";
import Checkout from "./customer/components/Checkout/Checkout.jsx";
import Footer from "./customer/components/Footer/Footer.jsx";
import Navigation from "./customer/components/Navigation/Navigation.jsx";
import Order from "./customer/components/Order/Order.jsx";
import HomePage from "./customer/components/Pages/HomePage/HomePage.jsx";
import Product from "./customer/components/Product/Product.jsx";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails.jsx";
import { men_kurta } from "./data/Men/men_kurta.js";

function App() {
  return (
    <>
      <Navigation />

      <div>
        <HomePage />
        {/* <Product /> */}
        {/* <ProductDetails/> */}
        {/* <Cart/> */}
        {/* <Checkout/> */}
        {/* <Order /> */}
      </div>
      <Footer />
    </>
  );
}

export default App;
