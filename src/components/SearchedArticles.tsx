import React from "react";
import { Link } from "react-router-dom";
import { ArticleEntity } from "../classes/article";
import "./SearchedArticles.scss";

type Props = {
  articles: ArticleEntity[];
};

const SearchedArticles: React.FC<Props> = (props: Props) => {
  return (
    <div className="searched-articles section">
      <div className="container">
        <div className="content">
          {props.articles.map((article) => {
            return (
              <Link key={article.id} to={article.path} className="box">
                <p className="subtitle">{article.title}</p>
                <p>{article.body}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchedArticles;
