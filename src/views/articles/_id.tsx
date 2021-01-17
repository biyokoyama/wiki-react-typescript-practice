import React from "react";
import { ArticleEntity } from "../../classes/article";
import ArticleContent from "../../components/ArticleContent";

const sampleArticle: ArticleEntity = new ArticleEntity({
  id: 1001,
  title: "サンプル記事1タイトル",
  body: "サンプル記事1本文\n本文\n本文本文\n本文本文本文",
});

const articlesIdView: React.FC = () => {
  return (
    <div className="articles-id">
      <div className="section">
        <div className="container">
          <ArticleContent article={sampleArticle} />
        </div>
      </div>
    </div>
  );
};

export default articlesIdView;
