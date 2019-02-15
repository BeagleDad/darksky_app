import React from "react";
import { Form } from "semantic-ui-react";
//import "./UserInput.css";

class UserInput extends React.Component {
  state = { lat: 38.434292, long: -122.662107 };

  onLatChange = event => {
    this.setState({ lat: event.target.value });
  };
  onLongChange = event => {
    this.setState({ long: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onUserInputSubmit(this.state);
  };

  render() {
    return (
      <Form onSubmit={this.onFormSubmit}>
        <Form.Group width="equal">
          <Form.Input
            label="Logitude"
            type="number"
            value={this.state.long}
            onChange={this.onLongChange}
          />
          <Form.Input
            label="Lattitude"
            type="number"
            value={this.state.lat}
            onChange={this.onLatChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    );
  }
}

export default UserInput;
