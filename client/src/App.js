import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Users from './components/Users';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add-user" component={AddUser} />
          <Route path="/edit-user/:id" component={EditUser} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
