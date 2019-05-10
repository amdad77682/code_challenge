const INITIAL_STATE = {
  albumsList: {}
};

export const albumReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_ALBUMS_RESOLVED":
      return {
        ...state,
        albumsList: action.payload
      };
    default:
      return state;
  }
};
