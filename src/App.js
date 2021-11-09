import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import NavigationBar from './components/NavigationBar/NavigationBar';
import AuthProvider from './context/AuthProvider';
import LogIn from './components/LogIn/LogIn/LogIn';
import Register from './components/LogIn/Register/Register';
import RoomDetails from './components/RoomDetials/RoomDetails';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MyOrders from './components/MyOrders/MyOrders';
import Shipping from './components/Shipping/Shipping';
import AddService from './components/AddService/AddService';
import Services from './components/Services/Services';
import ManageOrders from './components/ManageOrders/ManageOrders';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import AdminRoute from './components/AdminRoute/AdminRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <NavigationBar></NavigationBar>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/service/:serviceId'>
            <RoomDetails></RoomDetails>
          </Route>
          <Route path='/services'>
            <Services></Services>
          </Route>
          <PrivateRoute path='/my-order'>
            <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute path='/shipping'>
            <Shipping></Shipping>
          </PrivateRoute>
          <AdminRoute path='/add-service'>
            <AddService></AddService>
          </AdminRoute>
          <AdminRoute path='/manage-orders'>
            <ManageOrders></ManageOrders>
          </AdminRoute>
          <Route path='/login'>
            <LogIn></LogIn>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
