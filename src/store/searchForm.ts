import history from "../history";

/**
 * history
 */
const initialQuery =
  new URLSearchParams(history.location.search).get("q") || "";

/**
 * state
 */
type SearchFormState = {
  query: string;
};

/**
 * actions
 */
const SET_SEARCH_FORM_QUERY = "SET_SEARCH_FORM_QUERY" as const;
type SearchFormAction = {
  type: string;
  payload: {
    query: string;
  };
};
export const setSearchFormQueryAction = (query: string): SearchFormAction => ({
  type: SET_SEARCH_FORM_QUERY,
  payload: {
    query,
  },
});

/**
 * reducer
 */
const initialState: SearchFormState = {
  query: initialQuery,
};
export const searchFormReducer = (
  state = initialState,
  action: SearchFormAction
): SearchFormState => {
  switch (action.type) {
    case SET_SEARCH_FORM_QUERY:
      return {
        ...state,
        query: action.payload.query,
      };
    default:
      return state;
  }
};
