import React, {Component} from 'react';
//import uuid from 'uuid';
//Consumer lets us access the value property
import { Consumer } from '../../Context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class EditContact extends Component {
  //each field within the component will be a piece of State
  state = {
      name:'',
      email: '',
      phone: '',
      errors: {}
  };

  //we need to fetch the contact from the backend and put the data into State
  // and we use componentDidMount() to use that
  async componentDidMount() {
    //to use the id we need to pull that out
    const { id } = this.props.matchg.params;
    //this will give us single user
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

    //we are going to get an object
    const contact = res.data;
    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone
    });
  }

//At first it wont let us write anything because it is controlled component
//at first and we have to use onChange event in order to change the state

//this will grab the name attribute whatever it is equal to and change it
onChange = (e) => this.setState({[e.target.name]: e.target.value});
//onNameChange = (e) => this.setState({name: e.target.value});
//onEmailChange = (e) => this.setState({email: e.target.value});
//onPhoneChange = (e) => this.setState({phone: e.target.value});

onSubmit = async (dispatch, e) => {
  //to prevent to save it to file
  e.preventDefault();

  //to get values from the State
  const {name, email, phone} = this.state;

  //check for errors VALIDATION
  if(name === '') {
    this.setState({
      //setting equal to new state
      errors: { name: 'Name is required' }});
      return; //this stops the state after being updated
  }
  if(phone === '') {
    this.setState({
      errors: { phone: 'Phone is required' }});
      return; //this stops the state after being updated
  }
  if(email === '') {
    this.setState({
      errors: { email: 'Email is required' }});
      return; //this stops the state after being updated
  }

  //to access that action
  //dispatch({type: 'ADD_CONTACT', payload: newContact});

//Clear state
  this.setState({
    name: '',
    email: '',
    phone: '',
    errors:{} //empty object
  });

  //to redirect the page to home page after submitting the form
  this.props.history.push('/');
};

  render() {
    const {name,email,phone,errors} = this.state;

    return(
      <Consumer>
      // 'value includes entire state' and going to point to
      {value => {
        //After that we have access to dispatch which will allow us to call actions
        const { dispatch } = value;
        return(
          <div className="card mb-3">
            <div className="card-header">
              Edit Contact
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}> // we need to add dispatch so we use it within onSubmit
                <TextInputGroup
                label="Name"
                name="name"
                placeholder="Enter name..."
                value={name}
                error={errors.name}
                onChange={this.onChange}/>

                <TextInputGroup
                label="Email"
                type="email"
                name="email"
                placeholder="Enter email..."
                value={email}
                error={errors.email}
                onChange={this.onChange}/>

                <TextInputGroup
                label="Phone"
                name="phone"
                placeholder="Enter phone..."
                value={phone}
                error={errors.phone}  // a prop of erors and props passed in
                onChange={this.onChange}/>
                  <input type="submit"
                         value="Update Contact"
                         className="btn btn-light btn-block"/>
                </form>
              </div>
            </div>
          </div>
        )
      }}
      </Consumer>
    )
  }
}

export default EditContact;
