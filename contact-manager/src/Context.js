import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

//This will take in state and action
const reducer = (state, action) => {
  switch(action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,  //entire state
        contacts: state.contacts.filter(contact => //this will filter out the object
        // payload is some data we send along with action and sending id as a payload
        contact.id !== action.payload)
      };
      case 'ADD_CONTACT':
        return {
          ...state,  //entire state "spread operator is important for immutable state"
          contacts: [action.payload, ...state.contacts]
          //contacts is an array of contacts, [set of actions, new Array with actions added]
        };
      default:
      return state;
  }
};
//payload is some data which we want to send along with our action


export class Provider extends Component {
  state = {
          contacts:[ //this array holds our initial contacts or fetched contacts
          /*  comment that out for axios data coming from JSON
            {
              id: 1,
              name:'John Doe',
              email: 'Jdoe@gmail.com',
              phone: '111-222-1234'
            },
            {
              id: 2,
              name:'Ahmad Salimi',
              email: 'ahmad@gmail.com',
              phone: '222-222-1234'
            },
            {
              id: 3,
              name:'Waheed Salimi',
              email: 'waheed@gmail.com',
              phone: '333-222-1234'
            },
            {
              id: 4,
              name:'Muhammad Salimi',
              email: 'mohammad@gmail.com',
              phone: '444-222-1234'
            }*/
          ],
          //this is a way to call an action
          //we pass in the state and points to reducer and action
          //Now, dispatch is part of our state and it is being consumed along the state
          //Now, we will be able to call dispatch or action from anywhere
          dispatch: action => this.setState(state => reducer(state, action))
        };

        // to make it a aync call according to new syntax
        async componentDidMount() {
          const res  = await axios.get('https://jsonplaceholder.typicode.com/users') //we can pretend this is our own API
          this.setState({ //Promises
            contacts: res.data });
        }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;
//export default Provider;
