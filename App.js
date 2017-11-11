import React from 'react';
import { Provider } from 'react-redux';
import configStore from './App/redux/store';
import Home from './App/Screens/Home';

const store = configStore();

class App extends React.Component {
  componentDidMount() {
    console.log(store);
  }

  render() {
    return (
      <Provider store={store}>
        <Home/>
      </Provider>
    );
  }
}

export default App;