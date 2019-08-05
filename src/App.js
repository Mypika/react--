import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import './App.css';

import Index from './index/index'
import Login from './login/login'
import Home from './Home/Home'
import Errpage from './component/404/404'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() { 
    return (
        <BrowserRouter>
          <Route path="/" component={Index}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/home" exact component={Home}></Route>
        </BrowserRouter>
    );
  }
}
 
export default App;