import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../state';
import PackageList from './PackageList';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Search for a package</h1>
        <PackageList />
      </div>
    </Provider>
  );
}

export default App;
