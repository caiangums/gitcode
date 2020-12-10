import TYPES from './types';

const INITIAL_STATE = {
  isLogged: false,
};

export default function authReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TYPES.SET_LOGIN:
      return {
        ...state,
        isLogged: true,
      };
    case TYPES.SET_LOGOUT:
      return {
        ...state,
        isLogged: false,
      };
    default: {
      return state;
    }
  }
}
