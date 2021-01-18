import React from "react";
import { Link } from "react-router-dom";
import { ArticleEntity } from "../classes/article";
import styled from "styled-components";

type Props = {
  articles: ArticleEntity[];
};

const Wrapper = styled.div`
  .box:hover {
    box-shadow: 0 10px 16px rgba(0, 0, 0, 0.13), 0 6px 6px rgba(0, 0, 0, 0.19);
    transition: 0.5s;
  }
`;

const SearchedArticles: React.FC<Props> = (props: Props) => {
  return (
    <Wrapper className="searched-articles section">
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
    </Wrapper>
  );
};

export default SearchedArticles;
