import React from 'react';
import './App.css';
import HookCounter from './components/HookCounter'
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookMouse from './components/HookMouse';
// import MouseContainer from './components/MouseContainer';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
import ComponentC from './components/ComponentC';
import UseReducerCounterOne from './components/UseReducerCounterOne';
import UseReducerCounterTwo from './components/UseReducerCounterTwo';

// create a global context to be passed to components 
export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      {/* <HookCounter/> */}
      {/* <HookCounterTwo/> */}
      {/* <HookCounterThree/> */}
      {/* <HookMouse/> */}
      {/* <MouseContainer/> */}
      {/* <IntervalHookCounter/> */}
      {/* <DataFetching/> */}
      {/* <UseReducerCounterOne/> */}
      {/* <UseReducerCounterTwo/> */}

      {/* pass context values to given component  */}
      {/* <UserContext.Provider value={'Davis Deco'}>
        <ChannelContext.Provider value={'Software Engineer'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}


      

    </div>
  );
}

export default App;
