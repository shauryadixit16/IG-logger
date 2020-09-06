import {
  LOGS_ERROR,
  GET_LOGS,
  SET_LOADING,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
  SEARCH_LOGS,
} from '../actions/types';

const initialState = {
  logs: null,
  error: null,
  current: null,
  loading: false,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_LOGS:
      return {
        ...state,
        loading: false,
        logs: payload,
      };
    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter((log) => log.id !== payload),
        loading: false,
      };
    case LOGS_ERROR:
      console.error(payload);
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ADD_LOG:
      return {
        ...state,
        logs: [...state.logs, payload],
        loading: false,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case SEARCH_LOGS:
      return {
        ...state,
        logs: payload,
        loading: false,
      };
    case UPDATE_LOG:
      return {
        ...state,
        logs: state.logs.map((log) => (log.id === payload.id ? payload : log)),
        loading: false,
      };
    default:
      return state;
  }
};
