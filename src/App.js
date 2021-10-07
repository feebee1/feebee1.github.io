import "./App.css";
import Home from "./views/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Snowfall from "react-snowfall";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Snowfall />
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
