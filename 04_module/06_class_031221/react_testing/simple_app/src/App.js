import Greeting from './components/Greeting';
import './App.css';
import { Fragment } from 'react';
import Async from './components/Async';

function App() {
  return (
    <Fragment>
      <Greeting />
      <Async />
    </Fragment>
  );
}

export default App;
