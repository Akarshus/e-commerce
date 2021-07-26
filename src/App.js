import React from 'react'
import './App.css';
import Homepage from './pages/homepage.comp'
import Logon from './logon/login';
import ShopPage from './shop.component';
import Header from './component/collection/header/header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'> <Homepage /> </Route>
          <Route path='/shop'> <ShopPage /></Route>
          <Route path='/login'> <Logon /></Route>
        </Switch>
      </Router>
    </div>
  );
}



export default App;
