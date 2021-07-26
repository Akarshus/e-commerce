import React from 'react'
import './App.css';
import Homepage from './pages/homepage.comp'
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
        </Switch>
      </Router>
    </div>
  );
}



export default App;
