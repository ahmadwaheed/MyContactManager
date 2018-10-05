import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import { Provider } from './Context';
import AddContact from './components/contacts/AddContact';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Test from './components/test/Test';
import EditContact from './components/contacts/EditContact';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
//BrowserRouter is a Parent compound which saves all the routes
//Route which manages all the routes
//Switch is a default page
library.add(faStroopwafel)

//Provider is the outermost component and we gonna wrap everything else with Router
class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
          <Switch>
            <Route exact path="/" component={Contacts} />
            <Route exact path="/contact/add" component={AddContact} />
            <Route exact path="/contact/edit/:id" component={EditContact} />
            <Route exact path="/about" component={About} />
            <Route exact path="/test" component={Test} />
            <Route exact component={NotFound} />
          </Switch>
          </div>
        </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

//<Contact name="John Doe" email="jdoe@gmail.com" phone="555-333-1234" />
//<Contact name="Karen" email="karen@gmail.com" phone="532-323-4566" />
