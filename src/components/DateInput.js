import React from 'react';

const DateInput = (props) => {
  const {type, name, value, validations, onInputDateChange} = props;
  return (
      <input
          {...validations}
          className="form-input"
          type={type}
          name={name}
          value={value}
          onChange={e => {
            onInputDateChange(e);
          }}
      />
  );
};

export default DateInput;
