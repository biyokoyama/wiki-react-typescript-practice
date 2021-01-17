import { ArticleData } from "../types/article";

/**
 * ArticleEntity
 */
export class ArticleEntity {
  private data: ArticleData;

  constructor(data: ArticleData) {
    this.data = data;
  }

  get id(): number {
    return this.data.id;
  }

  get path(): string {
    return `/articles/${this.id}`;
  }

  get title(): string {
    return this.data.title;
  }

  get body(): string {
    return this.data.body;
  }
}
