const INITIAL_STATE = {
  kycInfo: {}
};

export const kycReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_KYC_INFO_RESOLVED":
      return {
        ...state,
        kycInfo: action.payload
      };
    default:
      return state;
  }
};
