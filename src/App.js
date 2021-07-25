import React from 'react'
import './App.css';
import Homepage from './pages/homepage.comp'
import ShopPage from './shop.component';
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
        <Switch>
          <Route exact path='/'> <Homepage /> </Route>
          <Route path='/shop'> <ShopPage /></Route>
        </Switch>
      </Router>
    </div>
  );
}



export default App;
