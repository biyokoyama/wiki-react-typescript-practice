import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../axios";
import { ArticleEntity } from "../../classes/article";
import ArticleContent from "../../components/ArticleContent";
import { SaveArticleContentForm } from "../../types/article";

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

  const saveArticleContentForm: SaveArticleContentForm = (
    articleContentFormData
  ) => {
    axios.put(`/api/articles/${articleId}`, articleContentFormData).then(() => {
      setArticleState(
        new ArticleEntity({
          id: articleId,
          ...articleContentFormData,
        })
      );
    });
  };

  return (
    <div className="articles-id">
      <div className="section">
        <div className="container">
          <ArticleContent
            article={articleState}
            saveArticleContentForm={saveArticleContentForm}
          />
        </div>
      </div>
    </div>
  );
};

export default articlesIdView;
