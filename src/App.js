import React, { Component } from "react";
import "./App.css";
import DynamicForm from "./components/DynamicForm";
import formFields from "./mockJsonFormDataModel";

class App extends Component {
  state = {
    data: [],
    current: {},
    payload: '',
  };

  onSubmit = model => {
    // can add some specific validation like first and last name separated by space or dob greater than 18
    // if we want to build the added form into data array and set the current form to a default
    // in case of reset form or something....  

    // for now

    this.setState({payload: JSON.stringify(model)});
  }

  render() {
    return (
      <div className="App">
      <DynamicForm
        className="form"
        title="Registration"
        defaultValues={this.state.current} // have to implement it later
        model={formFields}
        onSubmit={model => {
          this.onSubmit(model);
        }}
      />

      <div className="payload">
          {this.state.payload}
      </div>
    </div>
    );
  }
}

export default App;
