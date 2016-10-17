import React, { Component } from 'react';
import { Col, Form, FormGroup, ControlLabel, InputGroup, FormControl, HelpBlock, Button, Alert } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import axios from 'axios';

const styles = {
  controlLabel: {
    fontWeight: 400,
    fontSize: '1.10em'
  }
}

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      emailError: '',
      password: '',
      passwordError: '',
      alertVisible: false,
      waitForResponse: false
    };
  }

  getEmailValidationState() {
    if (this.state.emailError !== "") return 'error';
  }

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
      emailError: '',
      alertVisible: false
    });
  };

  validateEmail = () => {
    if (this.state.email.length === 0 || !/^.+@.+\..+$/.test(this.state.email)) {
      this.setState({ emailError: 'Please provide your email in name@domain.com format' });
      return false;
    }
  };

  getPasswordValidationState() {
    if (this.state.passwordError !== "") return 'error';
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
      passwordError: '',
      alertVisible: false
    });
  };

  validatePassword = () => {
    if (this.state.password.length === 0) {
      this.setState({ passwordError: 'Please provide your password' });
      return false;
    }
  };

  validateAll = () => {
    let valid = true;
    if (this.validateEmail() === false) valid = false;
    if (this.validatePassword() === false) valid = false;
    return valid;
  };

  getButtonState() {
    if (!this.state.waitForResponse) return false;
    else return true;
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.validateAll() === true) {
      this.setState({ waitForResponse: true });

      axios.post('https://fierce-ridge-28571.herokuapp.com/login', {
          email: this.state.email,
          pass: this.state.password
        })
        .then((res) => {
          this.setState({ waitForResponse: false });
          localStorage.setItem('currentUser', JSON.stringify(res.data));
          browserHistory.push(res.data.blogid);
        })
        .catch((err) => {
          this.setState({ waitForResponse: false });
          if (err.response.status === 403) this.setState({ alertVisible: true });
        });
    }
  };

  render() {
    return (
      <Form horizontal noValidate onSubmit={this.handleSubmit}>
        <FormGroup controlId="email" validationState={this.getEmailValidationState()}>
          <Col sm={3} componentClass={ControlLabel} style={styles.controlLabel}>
            Email
          </Col>
          <Col sm={6}>
            <InputGroup>
              <InputGroup.Addon><span className="glyphicon glyphicon-envelope"></span></InputGroup.Addon>
              <FormControl 
                type="email" 
                autoCapitalize="off" 
                autoCorrect="off" 
                autoComplete="email" 
                onChange={this.handleEmailChange}
                onBlur={this.validateEmail} 
                required 
              />
            </InputGroup>
            <FormControl.Feedback />
            <HelpBlock>{this.state.emailError}</HelpBlock>
          </Col>
        </FormGroup>
        <FormGroup controlId="password" validationState={this.getPasswordValidationState()}>
          <Col sm={3} componentClass={ControlLabel} style={styles.controlLabel}>
            Password
          </Col>
          <Col sm={6}>
            <InputGroup>
              <InputGroup.Addon><span className="glyphicon glyphicon-lock"></span></InputGroup.Addon>
              <FormControl 
                type="password" 
                autoComplete="password" 
                onChange={this.handlePasswordChange} 
                onBlur={this.validatePassword}
                required 
              />
            </InputGroup>
            <FormControl.Feedback />
            <HelpBlock>{this.state.passwordError}</HelpBlock>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col smOffset={3} sm={6}>
            { this.state.alertVisible && <Alert bsStyle="danger">
              <strong>Error!</strong> Wrong email or password.
            </Alert> }
            <Button type="submit" disabled={this.getButtonState()}>
              {this.state.waitForResponse ? 'Loading...' : 'Log in'}
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default LoginForm;
