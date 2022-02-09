import "./App.css";

import HomePage from "./pages/Home/HomePage";
import ShopPage from "./pages/Shop/ShopPage";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
