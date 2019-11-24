import React from 'react';
import * as routes from './constants/routes';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import MainLayout from './components/layout/MainLayout';
import HomeContainer from './components/Home/Home';
import ConsultContainer from './components/Candidates/Consult';
import ListContainer from './components/Candidates/List';
import NotFound from './components/commons/NotFound';
import './App.css';

// 404 Not Found component
const NotFound_Route = () => <Route component={NotFound} />;

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route exact path={routes.MAIN} component={HomeContainer} />
          <Route exact path={routes.CANDIDATE_CONSULT} component={ConsultContainer} />
          <Route exact path={routes.CANDIDATE_LIST} component={ListContainer} />
          {NotFound_Route()}
        </Switch>
      </MainLayout>
    </Router>
  );
};

export default App;
