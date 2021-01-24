import { AxiosRequestConfig } from "axios";
import { ArticleData } from "../../../types/article";
import { mockRoute } from "../../mock";
import { articles } from "../_data/articles";

const apiArticlesRegexp = /\/api\/articles(\?.*)?/;
const getQueryFromUrl = (url: string): string => {
  const matched = url.match(apiArticlesRegexp);
  const urlSearchParams = matched ? new URLSearchParams(matched[1]) : null;
  return urlSearchParams ? urlSearchParams.get("q") || "" : "";
};

export const mockApiArticlesGet: mockRoute = (mockAdapter) => {
  mockAdapter.onGet(apiArticlesRegexp).reply((config: AxiosRequestConfig) => {
    const query = getQueryFromUrl(`${config.url}`);
    return [
      200,
      articles.filter((article: ArticleData) => {
        return article.title.includes(query) || article.body.includes(query);
      }),
    ];
  });
};
