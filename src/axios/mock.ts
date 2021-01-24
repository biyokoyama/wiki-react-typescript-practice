import { AxiosInstance } from "axios";
import MockAdapter from "axios-mock-adapter";

// mockRoutes
import {
  mockApiArticlesIdGet,
  mockApiArticlesIdPut,
} from "./mock/api/articles/_id";
// ...

export type mockRoute = (mockAdapter: MockAdapter) => void;
const mockRoutes: mockRoute[] = [
  mockApiArticlesIdGet,
  mockApiArticlesIdPut,
  // ...
];

export const mock = (instance: AxiosInstance): void => {
  const mockAdapter = new MockAdapter(instance, { delayResponse: 500 });
  mockRoutes.forEach((mockRoute: mockRoute) => {
    mockRoute(mockAdapter);
  });
};
