import axios from "axios";
import { mock } from "./mock";

const instance = axios.create({
  baseURL: "/",
});

if (process.env.NODE_ENV === "development") {
  mock(instance);
}

export default instance;
