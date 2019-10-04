import React from 'react';

const TextInput = (props) => {
  const {type, name, value, validations, onInputTextChange} = props;
  return (
        <input
            {...validations}
            className="form-input"
            type={type}
            name={name}
            value={value}
            onChange={e => {
              onInputTextChange(e);
            }}
        />
  );
};

export default TextInput;
