import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/index";
import { setSearchFormQueryAction } from "../store/searchForm";

const SearchForm: React.FC = () => {
  /**
   * hooks
   */
  const history = useHistory();
  const dispatch = useDispatch();

  /**
   * store state
   */
  const searchFormState = useSelector((state: RootState) => {
    return state.searchForm;
  });

  /**
   * local state
   */
  const [searchInputState, setSearchInputState] = useState(
    searchFormState.query
  );

  /**
   * handlers
   */
  const handleChangeSearchInputState = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchInputState(event.target.value);
  };

  const handleClickSearchButton = (): void => {
    dispatch(setSearchFormQueryAction(searchInputState));
    history.push(`/search?q=${searchInputState}`);
  };

  /**
   * template
   */
  return (
    <div className="field has-addons has-addons-centered">
      <div className="control">
        <input
          className="input"
          value={searchInputState}
          onChange={handleChangeSearchInputState}
        />
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
