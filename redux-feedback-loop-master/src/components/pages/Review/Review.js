import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Axios from 'axios';

class Review extends Component {

    state = {
        newFeedBack: {
            feeling: '',
            understanding: '',
            support: '',
            comments: '',
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('adding feedback', this.state.newFeedBack);
        this.postFeedBack(this.state.newFeedBack);
        this.props.history.push('/thank-you"');
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

    render() {

        return (
            <div>

                <h3>Review Your Feedback</h3>
                <div onClick={this.handleSubmit}>
                <h4>Feelings: {this.props.store.submitFormReducer.feeling}</h4>
                <h4>Understanding: {this.props.store.submitFormReducer.understanding}</h4>
                <h4>Support: {this.props.store.submitFormReducer.support}</h4>
                <h4>Comments: {this.props.store.submitFormReducer.comments}</h4>
                <button>Submit</button>
                </div>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(Review);