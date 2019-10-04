import React from "react";
import TextInput from './Input';
import Radio from './Radio';
import Checkbox from './Checkbox';
import DateInput from './DateInput';

export default class DynamicForm extends React.Component {
  state = {};

  constructor(props) {
    super(props);
  }

    onSubmit = e => {
      e.preventDefault();
      console.log('state on submit ', this.state);
      if (this.props.onSubmit) this.props.onSubmit(this.state);
    };

    onChange = (e, key, type = "single") => {
      if (type === "single") {
        this.setState(
            {
              [key]: e.target.value
            },
            () => {
            }
        );
      } else {
        // Array of values (e.g. checkbox)
        console.log('type not single here');
        let found = this.state[key]
            ? this.state[key].find(d => d === e.target.value)
            : false;

        if (found) {
          let data = this.state[key].filter(d => {
            return d !== found;
          });
          this.setState({
            [key]: data
          });
        } else {
          console.log("found", key, this.state[key]);
          let others = this.state[key] ? [...this.state[key]] : [];
          this.setState({
            [key]: [e.target.value, ...others]
          });
        }
      }
    };

    renderInputGroups = (m, key) => {
      const inputGroups = m.groupOptions.map((o, index) => {
        return (
            <div key={index}>
              <label className="form-label" key={"l" + o.key} htmlFor={o.key}>
                {o.label}
              </label>
              <TextInput
                  validations={o.validations}
                  type={o.type}
                  name={o.name}
                  value={o.value}
                  onInputTextChange={(e) => {
                    this.onMultiInputTextChange(e);
                  }}
              />
            </div>
        )
      });
      return (
          <div className="form-input">{inputGroups}</div>
      )
    };
  

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

  renderRadioBox = (m, validations, value, type) => {
    const radioInput = m.options.map((o, index) => {
      let checked = o.value == value;
      return (
          <Radio
              validations={validations}
              type={type}
              key={index}
              labelKey={index}
              label={o.label}
              name={o.name}
              checked={checked}
              value={o.value}
              onRadioButtonChange={(e) => {
                this.onChange(e, o.name);
              }}
          />
      );
    });
    return (
        <div className="form-group-radio">{radioInput}</div>
    )
  };

  renderDateInput = (type, name, value, validations, target) => {
    return (
        <DateInput
            validations={validations}
            className="form-input"
            type={type}
            name={name}
            value={value}
            onInputDateChange={(e) => {
              this.onChange(e, target);
            }}
        />
    );
  };

  renderInputCheckBox = (m, value, type, validations) => {
    const inputCheckBox = m.options.map((o, index) => {
      let checked = false;
      if (value && value.length > 0) {
        checked = value.indexOf(o.value) > -1 ? true : false;
      }
      return (
          <Checkbox
              validations={validations}
              type={type}
              labelKey={index}
              key={index}
              name={o.name}
              checked={checked}
              value={o.value}
              label={o.label}
              onCheckboxChange={(e) => {
                this.onChange(e, m.key, "multiple");
              }}
          />
      );
    });

    return (
        <div className="form-group-checkbox">{inputCheckBox}</div>
    )
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
        case 'radio':
          input = this.renderRadioBox(m, validations, value, type);
          break;
        case 'checkbox':
          input = this.renderInputCheckBox(m, value, type, validations);
          break;
        case 'date':
          input = this.renderDateInput(type, name, value, validations, target);
          break;
        case 'inputGroups':
          input = this.renderInputGroups(m, key);
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
              onSubmit={e => {
                this.onSubmit(e);
              }}
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