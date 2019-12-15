import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class ThankYou extends Component {

    clearFeedBack = () => {
        this.props.dispatch({
            type: 'CLEAR_FEEDBACK'
        })
        this.props.history.push('/');
    }
    render(){

        return(
            <div>
                <h3>Thank You!</h3>
                <button onClick={this.clearFeedBack}>Leave New Feedback</button>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(ThankYou);