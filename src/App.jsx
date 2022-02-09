import "./App.css";

import HomePage from "./pages/Home/HomePage";
import ShopPage from "./pages/Shop/ShopPage";

import Header from "./components/Header/Header";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
