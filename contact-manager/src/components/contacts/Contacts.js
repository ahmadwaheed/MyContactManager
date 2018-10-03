import React , {Component} from 'react';
import Contact from './Contact';
import { Consumer } from '../../Context';

class Contacts extends Component {
  render() {
    return(
      <Consumer>
        {value=>{  // we need to return the whole component (fragment)
          //destructuring
          const { contacts } = value;
          return (
            <React.Fragment>
            <h1 className="display-4 mb-2"> <span className="text-danger"> Contact </span>List</h1>
              {value.contacts.map(contact => (   //value.contacts will bring the state to map() through
                <Contact key={contact.id}
                 contact={contact}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;


// <h3>{contact.name}{contact.email} {contact.phone}</h3>

//   {contacts.map(contact => (
//<Contact key={contact.id} name={contact.name} email={contact.email} phone={contact.phone} />))}
