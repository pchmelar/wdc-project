import React from 'react';
import { Col, Form, FormGroup, ControlLabel, InputGroup, FormControl, Button } from 'react-bootstrap';

const labelStyles = {
  fontWeight: 400,
  fontSize: '1.10em'
}

const RegForm = (props) => (
  <Form horizontal noValidate>
    <FormGroup>
      <Col sm={3} componentClass={ControlLabel} style={labelStyles}>
        Email
      </Col>
      <Col sm={6}>
        <InputGroup>
          <InputGroup.Addon><span className="glyphicon glyphicon-envelope"></span></InputGroup.Addon>
          <FormControl type="email" autoCapitalize="off" autoCorrect="off" autoComplete="email" />
        </InputGroup>
      </Col>
    </FormGroup>
    <FormGroup>
      <Col sm={3} componentClass={ControlLabel} style={labelStyles}>
        Password
      </Col>
      <Col sm={6}>
        <InputGroup>
          <InputGroup.Addon><span className="glyphicon glyphicon-lock"></span></InputGroup.Addon>
          <FormControl type="password" autoComplete="new-password" />
        </InputGroup>
      </Col>
    </FormGroup>
    <FormGroup>
      <Col sm={3} componentClass={ControlLabel} style={labelStyles}>
        Password confirm
      </Col>
      <Col sm={6}>
        <InputGroup>
          <InputGroup.Addon><span className="glyphicon glyphicon-lock"></span></InputGroup.Addon>
          <FormControl type="password" autoComplete="new-password" />
        </InputGroup>
      </Col>
    </FormGroup>
    <FormGroup>
      <Col smOffset={3} sm={6}>
        <Button type="submit">
          Create
        </Button>
      </Col>
    </FormGroup>
  </Form>
)

export default RegForm;
