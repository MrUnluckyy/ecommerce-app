import React from "react";

import "./App.css";

import HomePage from "./pages/Home/HomePage";
import ShopPage from "./pages/Shop/ShopPage";
import Auth from "./pages/Auth/Auth";

import Header from "./components/Header/Header";

import { Route, Switch } from "react-router-dom";

import { auth } from "./firebase/utils/firebase";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: undefined,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={Auth} />
        </Switch>
      </div>
    );
  }
}

export default App;
