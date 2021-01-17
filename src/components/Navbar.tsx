import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import logo from "../logo.png";
import SearchForm from "./SearchForm";
import "./Navbar.scss";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar is-light">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <span className="image is-24x24">
            <img className="is-rounded" src={logo} width="24" height="24" />
          </span>
        </Link>
        <Switch>
          <Route path="/" exact />
          <Route>
            <div className="navbar__item-search-form navbar-item">
              <SearchForm />
            </div>
          </Route>
        </Switch>
      </div>
    </nav>
  );
};

export default Navbar;
