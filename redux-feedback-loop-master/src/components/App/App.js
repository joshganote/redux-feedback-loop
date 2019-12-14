import React, { Component } from 'react';

//Redux
import { connect } from 'react-redux';
import mapStoreToProps from '../redux/mapStoreToProps';

//Styles
import './App.css';

//React-Router
import { HashRouter as Router, Route,} from 'react-router-dom';
import Feeling from '../pages/Feeling/Feeling';
import Content from '../pages/Content/Content';
import Support from '../pages/Support/Support';
import Comments from '../pages/Comments/Comments';
import Review from '../pages/Review/Review';
import ThankYou from '../pages/ThankYou/ThankYou'

class App extends Component {

  render() {
    return (
     <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
      <Route path="/" exact component={Feeling} />
      <Route path="/content" exact component={Content} />
      <Route path="/support" exact component={Support} /> 
      <Route path="/comments" exact component={Comments} /> 
      <Route path="/review" exact component={Review} /> 
      <Route path="/thank-you" exact component={ThankYou} />   
      </div>
      </Router>
    );
  }
}

export default connect(mapStoreToProps)(App);
