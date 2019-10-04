import React, { Component } from "react";
import "./App.css";
import DynamicForm from "./components/DynamicForm";
import formFields from "./mockJsonFormDataModel";

class App extends Component {
  state = {
    data: [],
  };

  render() {
    return (
      <div className="App">
        <DynamicForm
          className="form"
          title="Registration"
          model={formFields}
          onSubmit={model => {
            this.onSubmit(model);
          }}
        />
      </div>
    );
  }
}

export default App;
