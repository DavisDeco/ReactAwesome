import React from 'react';
import './App.css';
import HookCounter from './components/HookCounter'
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookMouse from './components/HookMouse';
// import MouseContainer from './components/MouseContainer';
import IntervalHookCounter from './components/IntervalHookCounter';

function App() {
  return (
    <div className="App">
      {/* <HookCounter/> */}
      {/* <HookCounterTwo/> */}
      {/* <HookCounterThree/> */}
      {/* <HookMouse/> */}
      {/* <MouseContainer/> */}
      <IntervalHookCounter/>
    </div>
  );
}

export default App;
