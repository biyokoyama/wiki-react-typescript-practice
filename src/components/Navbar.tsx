import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import logo from "../logo.png";
import SearchForm from "./SearchForm";
import styled from "styled-components";
import AxiosSample from "./AxiosSample";

const Wrapper = styled.nav`
  .navbar__title {
    margin-left: 1rem;
  }
  .navbar__item-search-form {
    width: 85%;
  }
`;

const Navbar: React.FC = () => {
  return (
    <Wrapper className="navbar is-light">
      <AxiosSample />
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <span className="image is-24x24">
            <img className="is-rounded" src={logo} width="24" height="24" />
          </span>
        </Link>
        <Switch>
          1
          <Route path="/" exact />
          <Route>
            <div className="navbar__item-search-form navbar-item">
              <SearchForm />
            </div>
          </Route>
        </Switch>
      </div>
    </Wrapper>
  );
};

export default Navbar;
