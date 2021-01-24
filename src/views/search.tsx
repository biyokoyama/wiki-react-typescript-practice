import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "../axios";
import { RootState } from "../store";
import { ArticleData } from "../types/article";
import { ArticleEntity } from "../classes/article";
import SearchedArticles from "../components/SearchedArticles";

const searchView: React.FC = () => {
  /**
   * store state
   */
  const searchFormState = useSelector((state: RootState) => {
    return state.searchForm;
  });

  /**
   * local state
   */
  const initialArticlesState: ArticleEntity[] = [];
  const [articlesState, setArticlesState] = useState(initialArticlesState);

  useEffect(() => {
    axios.get(`/api/articles?q=${searchFormState.query}`).then((response) => {
      setArticlesState(
        response.data.map(
          (articleData: ArticleData) => new ArticleEntity(articleData)
        )
      );
    });
  }, [searchFormState]);

  return (
    <div className="search has-background-light">
      <SearchedArticles articles={articlesState} />
    </div>
  );
};

export default searchView;
