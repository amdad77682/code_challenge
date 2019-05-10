const INITIAL_STATE = {
  albums: {}
};

export const albumReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_ALBUMS_RESOLVED":
      return {
        ...state,
        albums: action.payload
      };
    default:
      return state;
  }
};
