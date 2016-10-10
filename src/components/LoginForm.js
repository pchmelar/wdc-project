import React, { Component } from 'react';
import { Col, Form, FormGroup, ControlLabel, InputGroup, FormControl, HelpBlock, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

const labelStyles = {
  fontWeight: 400,
  fontSize: '1.10em'
}

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      emailValid: true,
      password: '',
      alertVisible: false
    };
  }
  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
    this.setState({ alertVisible: false });
    if (e.target.value.length > 0 && !/^.+@.+\..+$/.test(e.target.value)) {
      this.setState({ emailValid: false });
    } else {
      this.setState({ emailValid: true });
    }
  }
  getEmailValidationState() {
    if (!this.state.emailValid) return 'error';
  }
  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
    this.setState({ alertVisible: false });
  }
  getButtonState() {
    if (this.state.email.length > 0 && this.state.emailValid && this.state.password.length > 0) return false;
    else return true;
  }
  handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8080/login', {
        email: this.state.email,
        pass: this.state.password
      })
      .then((res) => {
        this.props.onSuccess(res);
      })
      .catch((err) => {
        if (err.response.status === 403) {
          this.setState({ alertVisible: true });
        }
      });
  }
  render() {
    return (
      <Form horizontal noValidate onSubmit={this.handleSubmit}>
        <FormGroup controlId="email" validationState={this.getEmailValidationState()}>
          <Col sm={3} componentClass={ControlLabel} style={labelStyles}>
            Email
          </Col>
          <Col sm={6}>
            <InputGroup>
              <InputGroup.Addon><span className="glyphicon glyphicon-envelope"></span></InputGroup.Addon>
              <FormControl type="email" autoCapitalize="off" autoCorrect="off" autoComplete="email" onChange={this.handleEmailChange} required />
            </InputGroup>
            <FormControl.Feedback />
            <HelpBlock>{this.state.emailValid ? '' : 'Invalid email format'}</HelpBlock>
          </Col>
        </FormGroup>
        <FormGroup controlId="password">
          <Col sm={3} componentClass={ControlLabel} style={labelStyles}>
            Password
          </Col>
          <Col sm={6}>
            <InputGroup>
              <InputGroup.Addon><span className="glyphicon glyphicon-lock"></span></InputGroup.Addon>
              <FormControl type="password" autoComplete="password" onChange={this.handlePasswordChange} required />
              <FormControl.Feedback />
            </InputGroup>
            <HelpBlock>{this.state.passwordError}</HelpBlock>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col smOffset={3} sm={6}>
            { this.state.alertVisible && <Alert bsStyle="danger">
              <strong>Error!</strong> Wrong email or password.
            </Alert> }
            <Button type="submit" disabled={this.getButtonState()}>
              Log in
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default LoginForm;
