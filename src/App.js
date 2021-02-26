import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import CoursePage from './components/CoursePage'

export default function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={ HomePage } />
          <Route path='/courses' component={ CoursePage } />
        </Switch>
      </Router>
    </React.Fragment>
  );
}