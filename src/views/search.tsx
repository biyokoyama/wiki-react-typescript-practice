import React from "react";
import { ArticleEntity } from "../classes/article";
import SearchedArticles from "../components/SearchedArticles";

const sampleArticles: ArticleEntity[] = [
  new ArticleEntity({
    id: 1001,
    title: "サンプル記事1タイトル",
    body: "サンプル記事1本文\n本文\n本文本文\n本文本文本文",
  }),
  new ArticleEntity({
    id: 1002,
    title: "サンプル記事2タイトル",
    body: "サンプル記事2本文\n本文\n本文本文\n本文本文本文",
  }),
  new ArticleEntity({
    id: 1003,
    title: "サンプル記事3タイトル",
    body: "サンプル記事3本文\n本文\n本文本文\n本文本文本文",
  }),
];

const searchView: React.FC = () => {
  return (
    <div className="search has-background-light">
      <SearchedArticles articles={sampleArticles} />
    </div>
  );
};

export default searchView;
