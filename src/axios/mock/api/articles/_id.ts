import { AxiosRequestConfig } from "axios";
import { ArticleContentFormData, ArticleData } from "../../../../types/article";
import { mockRoute } from "../../../mock";
import { articles } from "../../_data/articles";

const apiArticlesIdRegexp = /\/api\/articles\/(\d+)/;
const getArticleIdFromUrl = (url: string): number | null => {
  const matched = url.match(apiArticlesIdRegexp);
  return matched ? parseInt(matched[1]) : null;
};
const findArticleById = (articleId: number): ArticleData | null => {
  return (
    articles.find((article: ArticleData) => {
      return article.id === articleId;
    }) || null
  );
};

export const mockApiArticlesIdGet: mockRoute = (mockAdapter) => {
  mockAdapter.onGet(apiArticlesIdRegexp).reply((config: AxiosRequestConfig) => {
    const articleId = getArticleIdFromUrl(`${config.url}`);
    const article: ArticleData | null = articleId
      ? findArticleById(articleId)
      : null;

    if (!article) return [404];

    return [200, article];
  });
};

export const mockApiArticlesIdPut: mockRoute = (mockAdapter) => {
  mockAdapter.onPut(apiArticlesIdRegexp).reply((config: AxiosRequestConfig) => {
    const articleId = getArticleIdFromUrl(`${config.url}`);
    const article: ArticleData | null = articleId
      ? findArticleById(articleId)
      : null;

    if (!article) return [404];

    const articleContentFormData: ArticleContentFormData = JSON.parse(
      config.data
    );
    article.title = articleContentFormData.title;
    article.body = articleContentFormData.body;

    return [200];
  });
};
