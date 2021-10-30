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
          <Route path='/room/:roomId'>
            <RoomDetails></RoomDetails>
          </Route>
          <PrivateRoute path='/my-order'>
            <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute path='/shipping'>
            <Shipping></Shipping>
          </PrivateRoute>
          <PrivateRoute path='/add-service'>
            <AddService></AddService>
          </PrivateRoute>
          <Route path='/login'>
            <LogIn></LogIn>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
