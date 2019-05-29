import React from 'react';
import EmpDetails from './components/empDetails';
import FilterBar from './components/filterBar';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import rootReducer from './reducers';
import { rootEpic } from './epics';

import data from './data.json';
import './App.css';
import './fabric.min.css'

const epicMiddleware = createEpicMiddleware();
const store = createStore(rootReducer, applyMiddleware(epicMiddleware));
epicMiddleware.run(rootEpic);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <section>
          <FilterBar comp={data.components.filterBar} />
          <EmpDetails />
        </section>
      </div>
    </Provider>
  );
}

export default App;
