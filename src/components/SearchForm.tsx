import React from "react";
import { useHistory } from "react-router-dom";

const SearchForm: React.FC = () => {
  const history = useHistory();

  const handleClickSearchButton = (): void => {
    history.push(`/search?q=`);
  };

  return (
    <div className="field has-addons has-addons-centered">
      <div className="control">
        <input className="input" />
      </div>
      <div className="control">
        <button className="button is-primary" onClick={handleClickSearchButton}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
