import {
  LOGS_ERROR,
  SET_LOADING,
  GET_LOGS,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
  SEARCH_LOGS,
} from './types';

export const setloading = () => {
  return {
    type: SET_LOADING,
  };
};

export const getLogs = () => async (dispatch) => {
  try {
    setloading();
    const res = await fetch('/logs');
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.statusText,
    });
  }
};
// search log

export const searchLogs = (text) => async (dispatch) => {
  try {
    setloading();
    const res = await fetch(`/logs?q=${text}`);
    const data = await res.json();

    dispatch({
      type: SEARCH_LOGS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.statusText,
    });
  }
};
// update log

export const updateLogs = (log) => async (dispatch) => {
  try {
    setloading();
    const res = await fetch(`/logs/${log.id}`, {
      method: 'PUT',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

    dispatch({
      type: UPDATE_LOG,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.statusText,
    });
  }
};

// delete logs

export const deleteLogs = (id) => async (dispatch) => {
  try {
    setloading();
    await fetch(`/logs/${id}`, {
      method: 'DELETE',
    });

    dispatch({
      type: DELETE_LOG,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.statusText,
    });
  }
};
// setcurrent
export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};

// delete current
export const deleteCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};
export const addLogs = (log) => async (dispatch) => {
  try {
    setloading();
    const res = await fetch('/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

    dispatch({
      type: ADD_LOG,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.statusText,
    });
  }
};
