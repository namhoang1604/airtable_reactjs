export const getAllModels = (parentNumbers = null) => ({
  type: 'GET_ALL_MODELS',
  parentNumbers,
});

export const getAllModelsByModelModel = (modelModelIds) => ({
  type: 'GET_ALL_MODELS_BY_MODEL_MODEL',
  modelModelIds,
});
