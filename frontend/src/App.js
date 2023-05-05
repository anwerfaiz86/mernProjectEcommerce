import "./App.css";
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions.js";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile.js";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile.js";
import UpdatePassword from "./component/User/UpdatePassword.js";
import Cart from "./component/Cart/Cart.js";
import Shipping from "./component/Cart/Shipping.js";
import ConfirmOrder from "./component/Cart/ConfirmOrder.js";
import Dashboard from "./component/Admin/Dashboard.js";
import ProductList from "./component/Admin/ProductList.js";
import NewProduct from "./component/Admin/NewProduct";
import UpdateProduct from "./component/Admin/UpdateProduct";
import UsersList from "./component/Admin/UsersList";
import UpdateUser from "./component/Admin/UpdateUser";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    store.dispatch(loadUser());
  }, []);

  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route path="/search" element={<Search />} />
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/me/update"
          element={
            <ProtectedRoute>
              <UpdateProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/password/update"
          element={
            <ProtectedRoute>
              <UpdatePassword />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<LoginSignUp />} />
        <Route path="/cart" element={<Cart />} />

        <Route
          path="/shipping"
          element={
            <ProtectedRoute>
              <Shipping />
            </ProtectedRoute>
          }
        />
        <Route
          path="/order/confirm"
          element={
            <ProtectedRoute>
              <ConfirmOrder />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute
              adminRoute={true}
              isAuthenticated={isAuthenticated}
              isAdmin={user && user.role === "admin"}
            >
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/products"
          element={
            <ProtectedRoute
              adminRoute={true}
              isAuthenticated={isAuthenticated}
              isAdmin={user && user.role === "admin"}
            >
              <ProductList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/product"
          element={
            <ProtectedRoute
              adminRoute={true}
              isAuthenticated={isAuthenticated}
              isAdmin={user && user.role === "admin"}
            >
              <NewProduct />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/product/:id"
          element={
            <ProtectedRoute
              adminRoute={true}
              isAuthenticated={isAuthenticated}
              isAdmin={user && user.role === "admin"}
            >
              <UpdateProduct />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <ProtectedRoute
              adminRoute={true}
              isAuthenticated={isAuthenticated}
              isAdmin={user && user.role === "admin"}
            >
              <UsersList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/user/:id"
          element={
            <ProtectedRoute
              adminRoute={true}
              isAuthenticated={isAuthenticated}
              isAdmin={user && user.role === "admin"}
            >
              <UpdateUser />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
