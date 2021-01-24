import React, { useState } from "react";
import { ArticleEntity } from "../classes/article";
import {
  ArticleContentFormData,
  SaveArticleContentForm,
} from "../types/article";
import styled from "styled-components";

const Wrapper = styled.div`
  .article-content__body-paragraph {
    white-space: pre-wrap;
  }
`;

type Props = {
  article: ArticleEntity;
  saveArticleContentForm: SaveArticleContentForm;
};

const ArticleContent: React.FC<Props> = (props: Props) => {
  const [isEditing, setIsEditing] = useState(false);

  const initialArticleContentForm: ArticleContentFormData = {
    title: "",
    body: "",
  };
  const [articleContentForm, setArticleContentForm] = useState(
    initialArticleContentForm
  );

  const handleChangeArticleContentFormTitle = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setArticleContentForm({
      ...articleContentForm,
      title: event.target.value,
    });
  };

  const handleChangeArticleContentFormBody = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setArticleContentForm({
      ...articleContentForm,
      body: event.target.value,
    });
  };

  const handleClickEdit = (): void => {
    setArticleContentForm({
      title: props.article.title,
      body: props.article.body,
    });
    setIsEditing(!isEditing);
  };

  const handleClickSave = (): void => {
    props.saveArticleContentForm(articleContentForm);
    setIsEditing(!isEditing);
  };

  const handleClickCancel = (): void => {
    setArticleContentForm(initialArticleContentForm);
    setIsEditing(!isEditing);
  };

  return (
    <Wrapper className="article-content content">
      <div className="field is-grouped">
        <div className="control is-expanded">
          {!isEditing && <h1 className="title">{props.article.title}</h1>}
          {isEditing && (
            <input
              type="text"
              className="input"
              placeholder="title here"
              value={articleContentForm.title}
              onChange={handleChangeArticleContentFormTitle}
            />
          )}
        </div>
        <div className="control">
          <div className="buttons is-right">
            {!isEditing && (
              <button className="button" onClick={handleClickEdit}>
                Edit
              </button>
            )}
            {isEditing && (
              <button className="button is-primary" onClick={handleClickSave}>
                Save
              </button>
            )}
            {isEditing && (
              <button className="button" onClick={handleClickCancel}>
                Cancel
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="field">
        <div className="control">
          {!isEditing && (
            <p className="article-content__body-paragraph">
              {props.article.body}
            </p>
          )}
          {isEditing && (
            <textarea
              className="textarea has-fixed-size"
              placeholder="body here"
              value={articleContentForm.body}
              onChange={handleChangeArticleContentFormBody}
            ></textarea>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default ArticleContent;
