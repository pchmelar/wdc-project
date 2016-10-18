import React, { Component } from 'react';
import { Header, NavigationBar } from '../components/index.js';
import { browserHistory } from 'react-router';
import axios from 'axios';

const styles = {
  outerDiv: {
    height: '100%',
    display: 'flex',
    flexFlow: 'column'
  },
  content: {
    flex: '1',
    overflow: 'scroll'
  }
};

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      title: '',
      about: ''
    };
  }

  componentDidMount() {

    // try to get the current user from localStorage
    if (localStorage.getItem('currentUser')) {
      this.setState({user: JSON.parse(localStorage.getItem('currentUser'))});
    }

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

  handleLogout = () => {
    this.setState({ user: null });
    localStorage.removeItem('currentUser');
    browserHistory.push(this.props.params.blogId);
  };

  render() {
    return (
      <div style={styles.outerDiv}>
        <div className="hidden-xs">
          <Header 
            link={`/${this.props.params.blogId}`} 
            title={this.state.title} 
            homepage={false} 
            user={this.state.user}
            onRequestLogout={this.handleLogout}
          />
        </div>
        <NavigationBar 
          blogId={this.props.params.blogId} 
          user={this.state.user}
        />
        <div style={styles.content}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
