import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import favicon from "./assets/logo_coffee.png";

// import LandingPage from './components/LandingPage';
import About from './components/About';
import Home from './components/Home';
import Detail from './components/Detail';
import Perfil from './components/Account/Perfil';
import HomeAdmin from './components/Admin/HomeAdmin/HomeAdmin';
import ProductAdmin from './components/Admin/Product/ProductAdmin';
// import CrudApp from './components/Admin/CRUD/CrudAppProduct';
// import ProviderCreate from './components/Admin/FormProvider/PrividerCreate';
import Providers from "./components/Provider/Providers";
import FillCart from "./components/FillCart/FillCart";
import FormularioUsuario from "./components/Account/UserCreate/UserCreate";
import Modals from './components/Admin/Modals/Modals';

import Login from '../src/components/Authentication/Pages/Login'
import Register from "../src/components/Authentication/Pages/Register";
import ForgetPassword from "../src/components/Authentication/Pages/ForgetPassword";
import NewPassword from "../src/components/Authentication/Pages/NewPassword";
import ConfirmAccount from "../src/components/Authentication/Pages/ConfirmAccount";

import './styles/normalize.css'
import './styles/globals.css'
import ListProvider from './components/Provider/CRUD Provider/ListProvider';
import FormModifyProvider from './components/Provider/CRUD Provider/ModifyProvider';
import FormModifyProduct from './components/Admin/Product/CRUD Product/ModifyProduct';
import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from './components/NotFound';
import ListProducts from './components/Admin/Product/CRUD Product/ListProduct';
import CheckoutConfirm from './components/Checkout/CheckoutConfirm';


function App() {
  return (
    <>
      <Helmet>
        <link rel="shortcut icon" href={favicon} type="imahe/x-icon" />
        <title>Coffee Orders</title>
      </Helmet>

      <div>
        <Routes>
          {/* <Route exact path='/' element={<LandingPage />} /> */}
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          {/* <Route index element={<Login />} /> */}
          <Route path="/form" element={<Perfil />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="confirm/:id" element={<ConfirmAccount />} />
          <Route path="forget-password/:token" element={<NewPassword />} />
          <Route path="forget-password" element={<ForgetPassword />} />
          <Route exact path="/fillCart" element={<FillCart />} />
          {/* <Route exact path="/productAdminEdit" element={<ProductAdminEdit />} />*/}
          <Route exact path="/productAdmin" element={<ProductAdmin />} />
          <Route exact path="/homeAdmin" element={<HomeAdmin />} />
          <Route
            exact
            path="/modProvider/:id"
            element={<FormModifyProvider />}
          />
          <Route exact path="/modProduct/:id" element={<FormModifyProduct />} />

          <Route exact path="/listproductedit" element={<ListProducts />} />
          <Route exact path="/list" element={<ListProvider />} />
          {/* <Route exact path='/crud/product' element={<CrudApp />} /> */}
          {/* <Route exact path="/providerCreate" element={<ProviderCreate />} /> */}
          <Route exact path="/providers" element={<Providers />} />
          <Route exact path="/formusers" element={<FormularioUsuario />} />
          <Route exact path="/modals" element={<Modals />} />
          <Route path="*" element={<NotFound />} />
          <Route exact path="/checkout/congrats" element={<CheckoutConfirm />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;

