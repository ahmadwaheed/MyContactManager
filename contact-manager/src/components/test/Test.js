import React, { Component } from 'react';

class Test extends Component {

  state = {
    //test: 'test'
    title: '',
    body: ''
  };

  //this runs before componentDidMount
  //thats where we put in our AJAX calls in this hook
  componentWillMount() {
        console.log('componentWillMount');
  }

  //This hook will fire off after the component mounts
  //this is second famous hook.
  //this is where we make HTTP call to API/backend and if we are fetching
  //data from different component thats where we call initial request
  componentDidMount() {
        //console.log('componentDidMount');
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json()) //it is the response we get and map() it
        .then(data => this.setState({
          title: data.title,
          body: data.body
        })); //to get the data
  }

  //this only runs when component updates.
  //if we use that hook in a component which is updated it will get called
  componentDidUpdate() {
        console.log('componentDidUpdate');
  }

  //this only runs when component updates.
  //if we use that hook in a component which is updated it will get called
  componentWillUpdate() {
        console.log('componentDidUpdate');
  }

  //when the component receive new properties it will run
  //it is mostly used with Redux
  //Initial state can be take in with a map() as a prop
  //we can take state/prop with nextProps and manipulate it
  componentWillReceiveProps(nextProps, nextState) {
      console.log('componentWillReceiveProps');
  }

  //we have to pass in a state which we need to change or null
  //we cannot use setState(), we have to use return instead
  static getDerivedStateFromProps(nextProps, prevState) {
  //  return {
    //  test: 'Test is updating state'
  //  };
    return null;
  }

  //before the DOM is being updated
  getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log('getSnapshotBeforeUpdate');
  }

  render() {
    const {title, body} = this.state;
    return(
      <div>
        <h1>Test Component</h1>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    );
  }
};

export default Test;
