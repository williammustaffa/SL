import axios from 'axios';
import constants from 'utils/constants';

/**
 * fetching data
 */
export default function fetch() {
  return function (dispatch) {
    dispatch({ type: 'FETCH_STUFF' });

    return axios.get(constants.url)
      .then((response) => {
        dispatch({ type: 'FETCH_STUFF_FULFILLED', payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_STUFF_REJECTED', payload: err });
      });
  };
}
