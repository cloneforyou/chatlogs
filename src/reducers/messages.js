import {
  MESSAGES_LOADED,
  MESSAGES_LOADING,
  MESSAGES_FAILED_TO_LOAD,
} from '../action-creators/action-types';

export const initialState = {
  messages: [],
  errorMessage: '',
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MESSAGES_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case MESSAGES_LOADED:
      return {
        ...state,
        isLoading: false,
        errorMessage: '',
        messages: action.payload,
      };
    case MESSAGES_FAILED_TO_LOAD:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
