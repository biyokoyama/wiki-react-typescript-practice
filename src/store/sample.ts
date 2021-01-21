/**
 * state
 */
type SampleState = {
  sampleValue: number;
};

/**
 * actions
 */
const INCREMENT = "INCREMENT" as const;
const DECREMENT = "DECREMENT" as const;
type SampleAction = {
  type: string;
};
export const incrementAction = (): SampleAction => ({
  type: INCREMENT,
});
export const decrementAction = (): SampleAction => ({
  type: DECREMENT,
});

/**
 * reducer
 */
const initialState: SampleState = {
  sampleValue: 0,
};
export const sampleReducer = (
  state = initialState,
  action: SampleAction
): SampleState => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        sampleValue: state.sampleValue + 1,
      };
    case DECREMENT:
      return {
        ...state,
        sampleValue: state.sampleValue - 1,
      };
    default:
      return state;
  }
};
