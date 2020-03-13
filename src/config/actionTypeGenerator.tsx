export default actionName => {
  return {
    loading: `${actionName}_REQUEST`,
    success: `${actionName}_SUCCESS`,
    error: `${actionName}_FAILED`,
    default: actionName
  };
};
