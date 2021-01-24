import { AxiosInstance } from "axios";
import MockAdapter from "axios-mock-adapter";

// mockRoutes
import {
  mockApiArticlesIdGet,
  mockApiArticlesIdPut,
} from "./mock/api/articles/_id";
import { mockApiArticlesGet } from "./mock/api/articles";
// ...

export type mockRoute = (mockAdapter: MockAdapter) => void;
const mockRoutes: mockRoute[] = [
  mockApiArticlesIdGet,
  mockApiArticlesIdPut,
  mockApiArticlesGet,
  // ... 先勝ちなので順番に注意
];

export const mock = (instance: AxiosInstance): void => {
  const mockAdapter = new MockAdapter(instance, { delayResponse: 500 });
  mockRoutes.forEach((mockRoute: mockRoute) => {
    mockRoute(mockAdapter);
  });
};
