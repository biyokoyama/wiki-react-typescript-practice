import axios from "axios";
import { mock } from "./mock";
import { basePath, isGithubPages } from "../destination";

const instance = axios.create({
  baseURL: basePath,
});

if (process.env.NODE_ENV === "development" || isGithubPages) {
  mock(instance);
}

export default instance;
