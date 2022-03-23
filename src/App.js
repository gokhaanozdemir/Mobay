import React, { Component } from "react";
import Form from "./Components/Form";
import FormList from "./Components/FormList";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  handleSubmit =
    () =>
    ({
      product,
      code,
      location,
      explanation,
      supplier,
      quantity,
      delivery,
      date,
    }) => {
      const form = {
        product,
        code,
        location,
        explanation,
        supplier,
        quantity,
        delivery,
        date,
      };
      this.setState({
        items: [...this.state.items, form],
      });
    };
  render() {
    return (
      <div>
        {this.state.items.length > 0 ? (
          this.state.items.map((form) => <FormList key={form} {...form} />)
        ) : (
          <span id="span">Henüz girdi yok!</span>
        )}
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default App;
