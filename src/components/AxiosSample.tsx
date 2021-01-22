import React, { useState } from "react";
import axios from "../axios";

const AxiosSample: React.FC = () => {
  const [sampleValue, setSampleValue] = useState("");
  axios.get(`/api/sample`).then((response) => {
    setSampleValue(response.data);
  });

  return <div>AxiosSample: {sampleValue}</div>;
};

export default AxiosSample;
