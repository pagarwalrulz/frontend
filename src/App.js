import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import UserRegistration from './components/UserRegistration';
import UserList from './components/UserList';
import ViewPage from './components/ViewPage';
import EditPage from './components/EditPage';
import DeletePage from './components/DeletePage';
import {Layout} from './components/Layout';
import {NavigationBar} from './components/NavigationBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar/>
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={UserRegistration} />
              <Route path="/list" component={UserList} />
              <Route path="/view/:id" component={ViewPage} />
              <Route path="/edit/:id" component={EditPage} />
              <Route path="/delete/:id" component={DeletePage} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
