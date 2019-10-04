import React from 'react';

const Radio = (props) => {
  const {type, labelKey, name, value, checked, validations, label, onRadioButtonChange} = props;
  return (
  <React.Fragment key={"fr" + labelKey}>
    <input
        validations={validations}
        className="form-input"
        type={type}
        name={name}
        checked={checked}
        value={value}
        onChange={e => {
          onRadioButtonChange(e);
        }}
    />
    <label key={"ll-radio" + labelKey}>{label}</label>
  </React.Fragment>
  );
};

export default Radio;
