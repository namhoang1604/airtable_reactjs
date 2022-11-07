const defaultState = { flattenModels: [] };
const ACTION_HANDLERS = {
  GET_ALL_MODELS_SUCCESSFUL: (state, { data }) => {
    const flattenModels = [...state.flattenModels, ...data];
    return {
      ...state,
      flattenModels,
    };
  },
};
// eslint-disable-next-line default-param-last
const models = (state = defaultState, action) => {
  if (!action || !action.type) {
    return state;
  }
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
export default models;
