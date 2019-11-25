import axios from "axios";

export const LOAD_START = "LOAD_START";
export const ADD_POST = "ADD_POST";
export const LOAD_SUCCESS = "LOAD_SUCCESS";
export const LOAD_FAILURE = "LOAD_FAILURE";

export const getSmurfData = () => dispatch => {
  dispatch({ type: LOAD_START });

  axios.get("http://localhost:3333/smurfs").then(res => {
    dispatch({
      type: LOAD_SUCCESS,
      payload: res.data
    });
    console.log(res.data);
  });
};

export const postSmurfData = smurf => dispatch => {
  dispatch({ type: LOAD_START });
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(response => {
      dispatch({
        type: ADD_POST,
        payload: response.data
      });
      console.log(response);
      console.log(smurf);
    })
    .catch(err => {
      console.log(err);
    });
};
