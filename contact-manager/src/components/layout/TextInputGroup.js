import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextInputGroup = ({
  //destructuring so we dont have to use props.label ...
  label,
  name,
  value,
  placeholder,
  type,
  onChange,
  error  // we have to accept it as an error
}) => {
  return(
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input type={type}  //to make it dynamic
             className={classnames('form-control form-control-lg', //classes we want to apply no matter
                                  {'is-invalid': error})}
             placeholder={placeholder}
             value={value}
             //onChange={this.onNameChange} // change the initial state
             onChange={onChange} //another way to do this
             name={name}/>
             {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextInputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired
}


TextInputGroup.defaultProps = {
  type: 'text'
}

export default TextInputGroup;
