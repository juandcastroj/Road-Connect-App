import { types } from "../types/types";

export const userReducer = (state = {user:[]}, action) => {
  switch (action.type) {
    case types.login:

      return {
        ...state,
        user: action.payload
      };
      case types.logout:

      return {
        ...state,
        user: []
       }

    default:
      return state;
  }
};
