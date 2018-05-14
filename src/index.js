import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import store from 'store';

// Router
import history from 'store/history';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import App from 'containers/App';

const Routes = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={App} />
      </div>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(<Routes />, document.getElementById('root'));

if (process.env.NODE_ENV === 'development') {
  module.hot.accept();
}
