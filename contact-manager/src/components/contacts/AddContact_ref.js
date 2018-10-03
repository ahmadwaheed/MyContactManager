import React, {Component} from 'react';

class AddContact extends Component {
  constructor(props) {
    super(props);

    //this will attach ref to each field
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }

//At first it wont let us write anything because it is uncontrolled component

//this will grab the name attribute whatever it is equal to and change it
onChange = (e) => this.setState({[e.target.name]: e.target.value});
//onNameChange = (e) => this.setState({name: e.target.value});
//onEmailChange = (e) => this.setState({email: e.target.value});
//onPhoneChange = (e) => this.setState({phone: e.target.value});

onSubmit = (e) => {
  //to prevent to save it to file
  e.preventDefault();
  const contact = {
    name: this.nameInput.current.value,
    email: this.emailInput.current.value,
    phone: this.phoneInput.current.value,
  }
  console.log(contact);
};

static defaultProps = {
  name: 'Fred Smith',
  email: 'fred@yahoo.com',
  phone: '333-444-5678'
}

  render() {
    const {name,email,phone} = this.props;
    return(
      <div className="card mb-3">
        <div className="card-header">
          Add Contact
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text"
                       className="form-control form-control-lg"
                       placeholder="Enter Name..."
                       defaultValue={name}
                       ref={this.nameInput}
                       //onChange={this.onNameChange} // change the initial state
                       name="name"/>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email"
                       className="form-control form-control-lg"
                       placeholder="Enter Email..."
                       defaultValue={email}
                       ref={this.emailInput}
                       //onChange={this.onEmailChange}  // change the initial state
                       name="email"/>
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="text"
                       className="form-control form-control-lg"
                       placeholder="Enter Phone..."
                       defaultValue={phone}
                       ref={this.phoneInput}
                       //onChange={this.onPhoneChange} //change the initial state
                       name="phone"/>
              </div>
              <input type="submit"
                     value="Add Contact"
                     className="btn btn-light btn-block"/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddContact;
