import React from 'react';
import Swipeable from 'react-swipeable';

// Redux
import { connect } from 'react-redux';
import fetchStuff from 'actions/fetchStuff';
import simpleAction from 'actions/simpleAction';

// Stylesheets
import 'styles/App.scss';

@connect((store) => {
  return {
    tasks: store.configuration.tasks
  };
})
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      someState: 'john doe',
    };
  }

  componentWillMount() {
    // Fetch initial data
    this.props.dispatch(fetchStuff());
  }

  render() {
    return (
      <div className="app">
        Hello World! :3
      </div>
    );
  }
}

export default App;
