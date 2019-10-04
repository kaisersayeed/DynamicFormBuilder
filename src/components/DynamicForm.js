import React from "react";
import TextInput from './Input';

export default class DynamicForm extends React.Component {
  state = {};

  constructor(props) {
    super(props);
  }

  renderInputText = (type, name, value, validations, target) => {
    return (
        <TextInput
            validations={validations}
            className="form-input"
            type={type}
            name={name}
            value={value}
            onInputTextChange={(e) => {
              this.onChange(e, target);
            }}
        />
    );
  };

  renderForm = () => {
    const model = this.props.model;

    let formUI = model.map(m => {
      let key = m.key;
      let type = m.type || "text"; // default type is text input field.
      let validations = m.validations || {};
      let name = m.name;
      let value = m.value;

      let target = key;
      value = this.state[target] || "";
      let input = '';
      switch (type) {
        case 'text':
          input = this.renderInputText(type, name, value, validations, target);
          break;
        default:
          input = this.renderInputText(type, name, value, validations);
          break;
      }

      return (
          <div key={"g" + key} className="form-group">
            <label className="form-label" key={"l" + key} htmlFor={key}>
              {m.label}
            </label>
            {input}
          </div>
      );
    });
    return formUI;
  };

  render() {
    let title = this.props.title || "Dynamic Form";

    return (
        <div className={this.props.className}>
          <h3 className="form-title">{title}</h3>
          <form
              className="dynamic-form"
          >
            {this.renderForm()}
            <div className="form-actions">
              <button type="submit">submit</button>
            </div>
          </form>
        </div>
    );
  }
}