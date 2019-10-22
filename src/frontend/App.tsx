import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './components/navigationbar/navigationbar.ui';
import HomePage from './components/homepage/homepage.ui';
import About from './components/about/about.ui';

const App: React.FC = () => {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
