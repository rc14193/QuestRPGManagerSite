import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/navbar';
import Dashboard from './components/dashboard/Dashboard'
import QuestDetails from './components/quests/QuestDetails'
import SignIn from './components/auth/SignIn'
import CreateQuest from './components/quests/CreateQuest'
import Landing from './components/layout/Landing';
import Credits from './components/layout/Credits';
import QuestJoin from './components/layout/QuestJoin'
import SignUp from './components/auth/SignUp'
import Recovery from './components/auth/Recovery'
import PasswordReset from './components/auth/PasswordReset'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/quest/:id' exact={true} component={QuestDetails} />
          <Route path='/quest/:id/join' component={QuestJoin} />
          <Route path='/signin' component={SignIn} />
          <Route path='/credits' component={Credits} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/create' component={CreateQuest} />
          <Route path='/signup' component={SignUp} />
          <Route path='/recovery' component={Recovery} />
          <Route path='/passwordreset/' component={PasswordReset} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
