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

  handlesubmit =
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
          <div style={{ display: "none" }}></div>
        )}
        <Form handlesubmit={this.Sumbit} />
      </div>
    );
  }
}
export default App;
