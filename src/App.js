import React from 'react';
import { Switch, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import './App.css';
import DevelopersList from "./components/DevelopersList"
import Toolbar from './components/Toolbar';
import PostPage from './components/PostPage'
import LoginPage from "./components/LoginPage"

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Toolbar/>
        <Switch>
          <Route path="/developers" component={DevelopersList} />
          <Route component={Homepage} />
        </Switch>
        <Route path="/read/:id" component={PostPage} />
        <Route path="/login" component={LoginPage} />
      </div>
    );
  }
}