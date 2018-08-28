import React, { Component } from "react";
import { Card, CardSection, Input, Button } from "./common";
import { emailChanged } from "../actions";
import { connect } from "react-redux";

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChange={this.onEmailChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <Input secureTextEntry label="Password" placeholder="password" />
        </CardSection>

        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

export default connect(
  null,
  { emailChanged }
)(LoginForm);