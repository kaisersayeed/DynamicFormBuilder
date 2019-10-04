import React from 'react';

const Checkbox = (props) => {
  const {type, labelKey, name, value, checked, validations, label, onCheckboxChange} = props;
  return (
      <React.Fragment key={"cfr" + labelKey}>
        <input
            validations={validations}
            className="form-input"
            type={type}
            name={name}
            checked={checked}
            value={value}
            onChange={e => {
              onCheckboxChange(e);
            }}
        />
        <label key={"ll" + labelKey}>{label}</label>
      </React.Fragment>
  );
};

export default Checkbox;
