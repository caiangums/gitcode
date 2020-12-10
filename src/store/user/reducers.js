import TYPES from './types';

const INITIAL_STATE = {
  userInfo: {},
  repos: [],
};

export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TYPES.GET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };
    case TYPES.GET_USER_REPOS:
      return {
        ...state,
        repos: action.payload,
      };
    case TYPES.RESET_USER_INFO:
      return Object.assign({}, INITIAL_STATE);
    default: {
      return state;
    }
  }
}
