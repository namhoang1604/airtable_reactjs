const defaultState = { drawings: [] };
const ACTION_HANDLERS = {
  GET_ALL_DRAWINGS_SUCCESSFUL: (state, { data }) => {
    const drawings = [...state.drawings, ...data];
    return {
      ...state,
      drawings,
    };
  },
};
// eslint-disable-next-line default-param-last
const drawings = (state = defaultState, action) => {
  if (!action || !action.type) {
    return state;
  }
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
export default drawings;
