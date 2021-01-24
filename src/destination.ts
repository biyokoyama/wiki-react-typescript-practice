/**
 * デプロイ先関係
 */
export const isGithubPages =
  process.env.PUBLIC_URL ===
  "https://biyokoyama.github.io/wiki-react-typescript-practice";

export const basePath = process.env.PUBLIC_URL
  ? new URL(process.env.PUBLIC_URL).pathname
  : "";
