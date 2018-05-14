import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import configuration from 'reducers/configuration';

export default combineReducers({
  configuration,
  router: routerReducer, // navigation with `store.dispatch(push('/foo'))`
});
