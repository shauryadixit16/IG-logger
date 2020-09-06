import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR,
} from './types';

export const setloading = () => {
  return {
    type: SET_LOADING,
  };
};
export const getTechs = () => async (dispatch) => {
  try {
    setloading();
    const res = await fetch('/techs');
    const data = await res.json();

    dispatch({
      type: GET_TECHS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.statusText,
    });
  }
};
// add tech

export const addTech = (tech) => async (dispatch) => {
  try {
    setloading();
    const res = await fetch('/techs', {
      method: 'POST',
      body: JSON.stringify(tech),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

    dispatch({
      type: ADD_TECH,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.statusText,
    });
  }
};
// delete tech

export const deleteTech = (id) => async (dispatch) => {
  try {
    setloading();
    await fetch(`/techs/${id}`, {
      method: 'DELETE',
    });

    dispatch({
      type: DELETE_TECH,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR ,
      payload: error.response.statusText,
    });
  }
};
