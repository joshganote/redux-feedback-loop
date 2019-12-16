import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Axios from 'axios';

class Review extends Component {

    handleSubmit = (event) => {
        // grabs data off index.js 
        this.postFeedBack(this.props.store.submitFormReducer);
        this.props.history.push('/thank-you');
    }

    postFeedBack(feedBackInfo) {
        Axios({
            method: 'POST',
            url: '/feedback',
            data: feedBackInfo
        })
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    previousPage = (event) => {
        this.props.history.push('/comments');
    }

    render() {

        return (
            // had to take off the form tag since there are no inputs here
            <div>

                <h3>Review Your Feedback</h3>
                <div onClick={this.handleSubmit}>
                    <h4>Feelings: {this.props.store.submitFormReducer.feeling}</h4>
                    <h4>Understanding: {this.props.store.submitFormReducer.understanding}</h4>
                    <h4>Support: {this.props.store.submitFormReducer.support}</h4>
                    <h4>Comments: {this.props.store.submitFormReducer.comments}</h4>
                    <button>Submit</button>
                </div>
                <br/>
                <button onClick={this.previousPage}>Back</button>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(Review);