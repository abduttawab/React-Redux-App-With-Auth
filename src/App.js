import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Provider } from "react-redux";

import Posts from "./components/Posts";
import Postform from "./components/Postform";

import SignInForm from './components/SignInForm'
import store from "./store";

import {BrowserRouter,Switch,Route} from 'react-router-dom'




class App extends Component {
  render() {
    return (
      <Provider store={store}>


        <BrowserRouter>
          <Switch>
             <Route path="/" exact component={Posts}/>
             <Route path="/login" exact component={SignInForm}/>
          </Switch>
        
        </BrowserRouter>

        <div className="App">
         

          {/* <SignInForm/> */}
        </div>
      </Provider>
    );
  }
}

export default App;
