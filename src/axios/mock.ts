import { AxiosInstance } from "axios";
import MockAdapter from "axios-mock-adapter";

// mockRoutes
import mockApiSample from "./mock/api/sample";
// ...

export type mockRoute = (mockAdapter: MockAdapter) => void;
const mockRoutes: mockRoute[] = [
  mockApiSample,
  // ...
];

export const mock = (instance: AxiosInstance): void => {
  const mockAdapter = new MockAdapter(instance, { delayResponse: 500 });
  mockRoutes.forEach((mockRoute: mockRoute) => {
    mockRoute(mockAdapter);
  });
};
