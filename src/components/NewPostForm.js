import React from 'react';
import { Col, Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

const NewPostForm = (props) => (
  <Form horizontal noValidate>
    <FormGroup>
      <Col sm={6}>
        <ControlLabel>Headline</ControlLabel>
        <FormControl type="text" />
      </Col>
    </FormGroup>
    <FormGroup>
      <Col sm={6}>
        <ControlLabel>Location</ControlLabel>
        <FormControl type="text" />
      </Col>
    </FormGroup>
    <FormGroup>
      <Col sm={12}>
        <ControlLabel>Content</ControlLabel>
        <FormControl componentClass="textarea" placeholder="WYSIWYG" rows={12} style={{resize: 'none'}} />
      </Col>
    </FormGroup>
    <FormGroup>
      <Col sm={12}>
        <Button type="submit">
          Publish
        </Button>
      </Col>
    </FormGroup>
  </Form>
)

export default NewPostForm;