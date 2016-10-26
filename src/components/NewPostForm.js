import React, { Component } from 'react';
import { Col, Form, FormGroup, ControlLabel, FormControl, Button, HelpBlock } from 'react-bootstrap';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import GoogleMapsLoader from 'google-maps';
import { browserHistory } from 'react-router';
import axios from 'axios';

class NewPostForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      headline: '',
      headlineError: '',
      location: {
        description: '',
        lat: null,
        lng: null
      },
      locationError: '',
      content: '',
      contentError: '',
      waitForResponse: false,
      locationData: []
    };

    // setup Google Maps API
    GoogleMapsLoader.KEY = 'AIzaSyDHRSSM9cBkg4-tkLITA794XWTOUJHM2sw';
    GoogleMapsLoader.LIBRARIES = ['places'];
    GoogleMapsLoader.load((g) => {
      this.google = g;
    });
  }

  getHeadlineValidationState() {
    if (this.state.headlineError !== '') return 'error';
  }

  handleHeadlineChange = (e) => {
    this.setState({
      headline: e.target.value,
      headlineError: ''
    });
  };

  validateHeadline = () => {
    if (this.state.headline.length === 0) {
      this.setState({ headlineError: 'Please provide a headline of a post' });
      return false;
    }
  };

  getLocationValidationState() {
    if (this.state.locationError !== '') return 'error';
  }

  handleLocationChange = (value, callback) => {
    if (value.length > 0) {
      // query Google Places API
      const service = new this.google.maps.places.AutocompleteService();
      service.getPlacePredictions({ input: value }, (predictions, status) => {
        if (status === this.google.maps.places.PlacesServiceStatus.OK) {

          // handle results
          const result = [];
          for (const p of predictions) {
            result.push({
              value: p.description,
              label: p.description,
              placeId: p.place_id
            })
          }
          this.setState({ locationData: result });
        }
      });
    }
  };

  handleLocationSelect = (selectedValue) => {

    let description = '';
    let lat = null;
    let lng = null;

    if (selectedValue) {
      // get lat/lng from Google Places API
      const map = new this.google.maps.Map(document.createElement('div'));
      const service = new this.google.maps.places.PlacesService(map);
      service.getDetails({ placeId: selectedValue.placeId }, (place, status) => {
        if (status === this.google.maps.places.PlacesServiceStatus.OK) {
          lat = place.geometry.location.lat();
          lng = place.geometry.location.lng();
        }
        this.setState({
          location: {
            description: selectedValue.value,
            lat: lat,
            lng: lng
          }
        });
      });
    } else {
      this.setState({
        location: {
          description: description,
          lat: lat,
          lng: lng
        }
      });
    }
  };

  validateLocation = () => {
    if (this.state.location.description.length === 0) {
      this.setState({ locationError: 'Please provide a location of a post' });
      return false;
    }
  };

  getContentValidationState() {
    if (this.state.contentError !== '') return 'error';
  }

  handleContentChange = (e) => {
    this.setState({
      content: e.target.value,
      contentError: ''
    });
  };

  validateContent = () => {
    if (this.state.content.length === 0) {
      this.setState({ contentError: 'Please provide a content of a post' });
      return false;
    }
  };

  validateAll = () => {
    let valid = true;
    if (this.validateHeadline() === false) valid = false;
    if (this.validateLocation() === false) valid = false
    if (this.validateContent() === false) valid = false;
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

      axios.post(`https://fierce-ridge-28571.herokuapp.com/blog/${this.props.user.blogid}/post`, {
          title: this.state.headline,
          content: this.state.content,
          location: this.state.location,
          token: this.props.user.token
        })
        .then((res) => {
          this.setState({ waitForResponse: false });
          browserHistory.push(this.props.user.blogid);
        })
        .catch((err) => {
          this.setState({ waitForResponse: false });
          console.log(err);
        });
    }
  };

  render() {
    return (
      <Form horizontal noValidate onSubmit={this.handleSubmit}>
        <FormGroup controlId="headline" validationState={this.getHeadlineValidationState()}>
          <Col sm={6}>
            <ControlLabel>Headline</ControlLabel>
            <FormControl 
              type="text" 
              onChange={this.handleHeadlineChange}
              onBlur={this.validateHeadline} 
              required 
            />
            <FormControl.Feedback />
            <HelpBlock>{this.state.headlineError}</HelpBlock>
          </Col>
        </FormGroup>
        <FormGroup controlId="location" validationState={this.getLocationValidationState()}>
          <Col sm={6}>
            <ControlLabel>Location</ControlLabel>
            <Select
              value={this.state.location.description}
              options={this.state.locationData}
              onChange={this.handleLocationSelect}
              onInputChange={this.handleLocationChange}
              onBlur={this.validateLocation}
              placeholder=""
            />
            <HelpBlock>{this.state.locationError}</HelpBlock>
          </Col>
        </FormGroup>
        <FormGroup controlId="content" validationState={this.getContentValidationState()}>
          <Col sm={12}>
            <ControlLabel>Content</ControlLabel>
            <FormControl 
              componentClass="textarea"
              rows={12}
              style={{resize: 'none'}}
              onChange={this.handleContentChange}
              onBlur={this.validateContent} 
              required 
            />
            <FormControl.Feedback />
            <HelpBlock>{this.state.contentError}</HelpBlock>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col sm={12}>
            <Button type="submit" disabled={this.getButtonState()}>
              {this.state.waitForResponse ? 'Loading...' : 'Publish'}
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

NewPostForm.propTypes = {
  user: React.PropTypes.object
}

export default NewPostForm;
