import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import indexView from "./views";
import searchView from "./views/search";
import articlesIdView from "./views/articles/_id";
import "./App.scss";

const App: React.FC = () => {
  return (
    <div id="app" className="app">
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={indexView} />
        <Route exact path="/search" component={searchView} />
        <Route exact path="/articles/:id" component={articlesIdView} />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
