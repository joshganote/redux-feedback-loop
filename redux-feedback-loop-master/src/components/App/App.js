import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {

  state = {
    feedBack: [],
    enteredFeedBack: {
      feeling: '',
      understanding: '',
      support: '',
      comments: '',
      flagged: '',
      date: '',
    }
  }

  componentDidMount(){
    this.getFeedBack();
  }

  getFeedBack = () => {
    axios({
      method: 'GET',
      url: '/feedback',
    })
    .then((response) => {
      this.setState({
        feedBack: response.data
      }, () => {
        console.log(this.state);
      });
    })
    .catch((err) => {
      console.log(err);
    })
  }


  render() {
    return (
     
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        
      </div>
    );
  }
}

export default App;
