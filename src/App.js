import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import CHeader from './components/CHeader'
import Channel from './components/Channel'
import FunctionClick from './components/FunctionClick'
import CFunctionClick from './components/CFunctionClick'
import Form from './components/Form'
import Routing from './components/Routing'
import LifeCycleA from './components/LifeCycleA'
import Products from './components/Products'
import PostList from './components/PostList'
import HookObject from './components/HookObject'
import HookArray from './components/HookArray'
import A from './components/A'
import ReducerTest from './components/reducer'
import ReducerTest1 from './components/reducer2'
import Callbacktest from './components/Callback1'
import Memotest from './components/Memo1'
import ClassTimer from './components/UserRefTest'
import HookTimer from './components/UserRefTest2'

function App() {

  const handleClick = () => {
    console.log("handle click function")
  }
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/*<Header name="ABU"/>
      <CHeader name="RAIHAN"/>
      
      <FunctionClick/>
      <CFunctionClick roll="3"/>
      <Form/>
     
      <LifeCycleA/> */}
      {/* <Products/> */}
      {/* <Channel/> */}
      {/* <A handleClickFunction = {handleClick}/> */}
      {/* <Routing/> */}
      {/* <ReducerTest/> */}
      {/* <Callbacktest/> */}
      {/* <Memotest/> */}
      <HookTimer/>
    </div>
  );
}

export default App;
