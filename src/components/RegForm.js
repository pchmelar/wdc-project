import React, { Component } from 'react';
import { Col, Form, FormGroup, ControlLabel, InputGroup, FormControl, Button, HelpBlock, Alert } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import axios from 'axios';

const styles = {
  controlLabel: {
    fontWeight: 400,
    fontSize: '1.10em'
  }
}

class RegForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      emailError: '',
      password: '',
      passwordError: '',
      passwordConfirm: '',
      passwordConfirmError: '',
      blogid: '',
      blogidError: '',
      title: '',
      titleError: '',
      alert: '',
      waitForResponse: false
    };
  }

  getEmailValidationState() {
    if (this.state.emailError !== '') return 'error';
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
    if (this.state.passwordError !== '') return 'error';
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
      passwordError: ''
    });
  };

  validatePassword = () => {
    if (this.state.password.length === 0) {
      this.setState({ passwordError: 'Please provide your password' });
      return false;
    }
  };

  getPasswordConfirmValidationState() {
    if (this.state.passwordConfirmError !== '') return 'error';
  }

  handlePasswordConfirmChange = (e) => {
    this.setState({
      passwordConfirm: e.target.value,
      passwordConfirmError: ''
    });
  };

  validatePasswordConfirm = () => {
    if (this.state.password.length === 0) {
      this.setState({ passwordConfirmError: 'Please confirm your password' });
      return false;
    } else if (this.state.password !== this.state.passwordConfirm) {
      this.setState({ passwordConfirmError: 'Passwords do not match' });
      return false;
    }
  };

  getBlogidValidationState() {
    if (this.state.blogidError !== '') return 'error';
  }

  handleBlogidChange = (e) => {
    this.setState({
      blogid: e.target.value,
      blogidError: '',
      alertVisible: false
    });
  };

  validateBlogid = () => {
    if (this.state.blogid.length === 0) {
      this.setState({ blogidError: 'Please provide a URL of your new blog' });
      return false;
    } else if (!/^[a-zA-Z0-9]*$/.test(this.state.blogid)) {
      this.setState({ blogidError: 'URL can not contain special characters' });
      return false;
    }
  };

  getTitleValidationState() {
    if (this.state.titleError !== '') return 'error';
  }

  handleTitleChange = (e) => {
    this.setState({
      title: e.target.value,
      titleError: ''
    });
  };

  validateTitle = () => {
    if (this.state.title.length === 0) {
      this.setState({ titleError: 'Please provide a title of your new blog' });
      return false;
    }
  };

  validateAll = () => {
    let valid = true;
    if (this.validateEmail() === false) valid = false;
    if (this.validatePassword() === false) valid = false;
    if (this.validatePasswordConfirm() === false) valid = false;
    if (this.validateBlogid() === false) valid = false;
    if (this.validateTitle() === false) valid = false;
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

      axios.post('https://fierce-ridge-28571.herokuapp.com/blog', {
          blogid: this.state.blogid,
          email: this.state.email,
          pass: this.state.password,
          title: this.state.title,
          about: ''
        })
        .then((res) => {
          this.setState({ waitForResponse: false });
          localStorage.setItem('currentUser', JSON.stringify(res.data));
          browserHistory.push(this.state.blogid);
        })
        .catch((err) => {
          this.setState({ 
            waitForResponse: false,
            alert: err.response.data 
          });
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
                autoComplete="new-password" 
                onChange={this.handlePasswordChange} 
                onBlur={this.validatePassword}
                required 
              />
            </InputGroup>
            <FormControl.Feedback />
            <HelpBlock>{this.state.passwordError}</HelpBlock>
          </Col>
        </FormGroup>
        <FormGroup controlId="passwordConfirm" validationState={this.getPasswordConfirmValidationState()}>
          <Col sm={3} componentClass={ControlLabel} style={styles.controlLabel}>
            Password confirm
          </Col>
          <Col sm={6}>
            <InputGroup>
              <InputGroup.Addon><span className="glyphicon glyphicon-lock"></span></InputGroup.Addon>
              <FormControl
                type="password" 
                autoComplete="new-password" 
                onChange={this.handlePasswordConfirmChange} 
                onBlur={this.validatePasswordConfirm}
                required 
              />
            </InputGroup>
            <FormControl.Feedback />
            <HelpBlock>{this.state.passwordConfirmError}</HelpBlock>
          </Col>
        </FormGroup>
        <FormGroup controlId="blogid" validationState={this.getBlogidValidationState()}>
          <Col sm={3} componentClass={ControlLabel} style={styles.controlLabel}>
            URL
          </Col>
          <Col sm={6}>
            <InputGroup>
              <InputGroup.Addon><span className="glyphicon glyphicon-link"></span></InputGroup.Addon>
              <FormControl
                type="text" 
                placeholder="traveldiary.com/YOUR_URL"
                onChange={this.handleBlogidChange} 
                onBlur={this.validateBlogid}
                required 
              />
            </InputGroup>
            <FormControl.Feedback />
            <HelpBlock>{this.state.blogidError}</HelpBlock>
          </Col>
        </FormGroup>
        <FormGroup controlId="title" validationState={this.getTitleValidationState()}>
          <Col sm={3} componentClass={ControlLabel} style={styles.controlLabel}>
            Title
          </Col>
          <Col sm={6}>
            <InputGroup>
              <InputGroup.Addon><span className="glyphicon glyphicon-text-size"></span></InputGroup.Addon>
              <FormControl
                type="text" 
                onChange={this.handleTitleChange} 
                onBlur={this.validateTitle}
                required 
              />
            </InputGroup>
            <FormControl.Feedback />
            <HelpBlock>{this.state.titleError}</HelpBlock>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col smOffset={3} sm={6}>
            { this.state.alert !== '' && <Alert bsStyle="danger">
              { this.state.alert }
            </Alert> }
            <Button type="submit" disabled={this.getButtonState()}>
              {this.state.waitForResponse ? 'Loading...' : 'Create'}
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default RegForm;
