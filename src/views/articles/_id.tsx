import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../axios";
import { ArticleEntity } from "../../classes/article";
import ArticleContent from "../../components/ArticleContent";

const articlesIdView: React.FC = () => {
  type Params = {
    id: string;
  };
  const params = useParams<Params>();

  const articleId = parseInt(params.id);
  const initialArticleState = new ArticleEntity({
    id: articleId,
    title: "",
    body: "",
  });
  const [articleState, setArticleState] = useState(initialArticleState);

  useEffect(() => {
    axios.get(`/api/articles/${articleId}`).then((response) => {
      setArticleState(new ArticleEntity(response.data));
    });
  }, []);

  return (
    <div className="articles-id">
      <div className="section">
        <div className="container">
          <ArticleContent article={articleState} />
        </div>
      </div>
    </div>
  );
};

export default articlesIdView;
