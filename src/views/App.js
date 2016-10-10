import React, { Component } from 'react';
import Header from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import axios from 'axios';

const outerDivStyles = {
  height: '100%',
  // display: 'flex',
  // flexFlow: 'column'
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      about: ''
    };
  }
  componentDidMount() {
    axios.get('http://localhost:8080/blog/' + this.props.params.blogId)
      .then((res) => {
        this.setState({ 
          title: res.data.title,
          about: res.data.about
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div style={outerDivStyles}>
        <div className="hidden-xs">
          <Header title={this.state.title} homepage={false} />
        </div>
        <NavigationBar blogId={this.props.params.blogId} />
        {this.props.children}
      </div>
    );
  }
}

export default App;
