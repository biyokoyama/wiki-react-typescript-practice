import React from "react";
import SearchForm from "../components/SearchForm";

const indexView: React.FC = () => {
  return (
    <div className="index">
      <section className="hero is-light is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">wiki-react-typescript-practice</h1>
            <SearchForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default indexView;
