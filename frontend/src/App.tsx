import "./App.css";
import { Navbar } from "./layouts/Navbar";
import { Redirect, Route, Switch } from "react-router-dom";
import { Footer } from "./layouts/Footer";
import { Homepage } from "./layouts/Homepage";
import { SearchBookPage } from "./layouts/SearchBookPage";

export const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <Switch>
          <Route path="/" exact>
            {" "}
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            {" "}
            <Homepage />
          </Route>
          <Route path="/search">
            <SearchBookPage />
          </Route>
        </Switch>
      </div>

      <Footer />
    </div>
  );
};
