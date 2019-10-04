import React, { Component } from "react";
import "./App.css";
import DynamicForm from "./components/DynamicForm";
import formFields from "./mockJsonFormDataModel";

class App extends Component {
  state = {
    data: [],
    current: {},
  };

  onSubmit = model => {
    let data = [];
    if (model.id) {
      data = this.state.data.filter(d => {
        return d.id != model.id;
      });
    } else {
      model.id = +new Date();
      data = this.state.data.slice();
    }
  }

  render() {
    return (
      <div className="App">
      <DynamicForm
        className="form"
        title="Registration"
        defaultValues={this.state.current}
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
