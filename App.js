import React, { Component } from 'react';
import Routes from './Routes'
import { Provider } from 'react-redux'
import configureStore from './app/store/configureStore';

const store = configureStore({});


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App