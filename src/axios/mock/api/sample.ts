import { mockRoute } from "../../mock";

const mockApiSample: mockRoute = (mockAdapter) => {
  mockAdapter.onGet("/api/sample").reply(200, "sample response.");
};
export default mockApiSample;
