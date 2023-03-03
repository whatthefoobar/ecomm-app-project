import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify"; // for that snazzy error msg box when login error
import "react-toastify/dist/ReactToastify.css";
import ProductsScreen from "./screens/ProductsScreen";
import ProductScreen from "./screens/ProductScreen";
import Container from "react-bootstrap/Container";
import { useContext, useState } from "react";
import { Store } from "./Store";
import CartScreen from "./screens/CartScreen";
import SigninScreen from "./screens/SigninScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import SignupScreen from "./screens/SignupScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import CarouselHome from "./screens/CarouselHome";
import Error from "./screens/Error";
import Navigationbar from "./components/Navigationbar";
import OrderScreen from "./screens/OrderScreen";
import OrderHistoryScreen from "./screens/OrderHistoryScreen";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");
    localStorage.removeItem("shippingAddress");
    localStorage.removeItem("paymentMethod");
    window.location.href = "/signin";
  };

  // eslint-disable-next-line
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  // const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     try {
  //       const { data } = await axios.get(`/api/products/categories`);
  //       setCategories(data);
  //     } catch (err) {
  //       toast.error(getError(err));
  //     }
  //   };
  //   fetchCategories();
  // }, []);

  return (
    <Router>
      <div
        className={
          sidebarIsOpen
            ? "d-flex flex-column site-container active-cont"
            : "d-flex flex-column site-container"
        }
      >
        {/* for that snazzy error msg box when login error */}
        <ToastContainer position="bottom-center" limit={1} />{" "}
        {/* Navbar here */}
        <Navigationbar
          cart={cart}
          userInfo={userInfo}
          signoutHandler={signoutHandler}
          // sidebarIsOpen={sidebarIsOpen}
          // setSidebarIsOpen={setSidebarIsOpen}
        />
        {/* Main content here */}
        <Container className="mt-3 mb-5 ">
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/signin" element={<SigninScreen />} />
            <Route path="/signup" element={<SignupScreen />} />
            <Route path="/shipping" element={<ShippingAddressScreen />} />
            <Route path="/orderhistory" element={<OrderHistoryScreen />} />
            <Route path="/payment" element={<PaymentMethodScreen />} />
            <Route path="/placeorder" element={<PlaceOrderScreen />} />
            <Route path="/order/:id" element={<OrderScreen />} />
            <Route path="/products" element={<ProductsScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />

            <Route path="/" element={<CarouselHome />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
