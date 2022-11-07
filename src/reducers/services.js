const defaultState = { services: [] };
const ACTION_HANDLERS = {
  GET_ALL_SERVICES_SUCCESSFUL: (state, { data }) => {
    const services = [...state.services, ...data];
    return {
      ...state,
      services,
    };
  },
};
// eslint-disable-next-line default-param-last
const services = (state = defaultState, action) => {
  if (!action || !action.type) {
    return state;
  }
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
export default services;
