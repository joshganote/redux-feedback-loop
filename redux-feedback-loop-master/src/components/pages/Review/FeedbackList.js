import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Review from '../Review/Review';

class FeedbackList extends Component {

    render() {
        const feedBackArray = this.props.store.submitFormReducer.map((item, index) => {
            return (
                <Review item={item} key={index} />
            )
        })
        return (
            <div>{feedBackArray}</div>
        )
    }
}

export default connect(mapStoreToProps)(FeedbackList);