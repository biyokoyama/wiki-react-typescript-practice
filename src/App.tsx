import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import indexView from "./views";
import searchView from "./views/search";
import articlesIdView from "./views/articles/_id";
import styled from "styled-components";
import { basePath } from "./destination";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  & > div {
    flex: 1;
  }
`;

const App: React.FC = () => {
  return (
    <Wrapper id="app" className="app">
      <BrowserRouter basename={basePath}>
        <Navbar />
        <Route exact path="/" component={indexView} />
        <Route exact path="/search" component={searchView} />
        <Route exact path="/articles/:id" component={articlesIdView} />
        <Footer />
      </BrowserRouter>
    </Wrapper>
  );
};

export default App;
