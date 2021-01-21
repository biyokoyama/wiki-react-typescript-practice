import React from "react";
import { RootState } from "../store/index";
import { incrementAction, decrementAction } from "../store/sample";
import { useSelector, useDispatch } from "react-redux";

const SampleStoreTest: React.FC = () => {
  const sampleState = useSelector((state: RootState) => {
    return state.sample;
  });
  const dispatch = useDispatch();

  const handleClickIncrementButton = (): void => {
    dispatch(incrementAction());
  };
  const handleClickDecrementButton = (): void => {
    dispatch(decrementAction());
  };

  return (
    <div className="content">
      <p>sampleValue: {sampleState.sampleValue}</p>
      <button onClick={handleClickIncrementButton}>+</button>
      <button onClick={handleClickDecrementButton}>-</button>
    </div>
  );
};

export default SampleStoreTest;
