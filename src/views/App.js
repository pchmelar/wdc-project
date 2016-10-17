import React, { Component } from 'react';
import { Header, NavigationBar } from '../components/index.js';
import axios from 'axios';

const styles = {
  outerDiv: {
    height: '100%',
    // display: 'flex',
    // flexFlow: 'column'
  }
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
    axios.get('https://fierce-ridge-28571.herokuapp.com/blog/' + this.props.params.blogId)
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
      <div style={styles.outerDiv}>
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
