import './Css/loginStyle.css';
import './Css/Dashboard.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './Css/icons.css';
import { Routes, Route, BrowserRouter, HashRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { Provider } from "react-redux";
import store from "./redux/store"; 
import Auth from './pages/Auth';
import RecoverPassword from './pages/RecoverPassword';
import VerifyOTP from './pages/VerifyOTP';
import RecoverSuccess from './pages/RecoverSuccess';
import { PrivateRoute } from './Component/privateRoute';
import PageRoute from './Component/pageRoute';
import Registration from './pages/Registration';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
    <ToastContainer />
    <Provider store={store}>
      <BrowserRouter>
          <Routes  history={HashRouter}>
            <Route exact path="/" element={<Auth />} />
            <Route exact path="/registration" element={<Registration />} />
            <Route exact path="/recover-password" element={<RecoverPassword />} />
            <Route exact path="/verify-OTP" element={<VerifyOTP />} />
            <Route exact path="/recover-success" element={<RecoverSuccess />} />
            <Route exact path="/dashboard/*" element={<PrivateRoute><PageRoute /></PrivateRoute>} />
          </Routes>
      </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
