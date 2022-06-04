import React, {Component} from 'react';
import {Route, Redirect, Switch} from 'react-router-dom'
import './App.css';
// import Header from './components/Header'
// import CHeader from './components/CHeader'
// import Channel from './components/Channel'
// import FunctionClick from './components/FunctionClick'
// import CFunctionClick from './components/CFunctionClick'
// import Form from './components/Form'
// import Routing from './components/Routing'
// import LifeCycleA from './components/LifeCycleA'
// import Products from './components/Products'
// import PostList from './components/PostList'
// import HookObject from './components/HookObject'
// import HookArray from './components/HookArray'
// import A from './components/A'
// import ReducerTest from './components/reducer'
// import ReducerTest1 from './components/reducer2'
// import Callbacktest from './components/Callback1'
// import Memotest from './components/Memo1'
// import ClassTimer from './components/UserRefTest'
// import HookTimer from './components/UserRefTest2'
// import Counters from './components/Counters'
import Movies from './components/movies'
import Customers from './components/customers'
import Rental from './components/rental'
import NotFound from './components/notFound'
import NavBar from './components/navbar'
import MovieForm from './components/movieForm'

class App extends Component {

  render () {
    return (
      <React.Fragment>
        <NavBar/>
          <div className="container">
            <Switch>
              <Route path="/movies/:id" component={MovieForm}></Route>
              <Route path="/movies" component={Movies}></Route>
              <Route path="/customers" component={Customers}></Route>
              <Route path="/rental" component={Rental}></Route>
              <Route path="/not-found" component={NotFound}></Route>
              <Redirect from="/" exact to="/movies" />
              <Redirect to="/not-found" />
            </Switch>
          </div>
      </React.Fragment>
    );
  }
 
}

export default App;