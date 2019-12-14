import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class Comments extends Component {
    state = {
        comments: '',
    }

    changeField = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    submitCommentInfo = (event) => {
        event.preventDefault();

        this.props.dispatch({
            type: 'ADD_COMMENT',
            payload: this.state,
        });
        this.props.history.push('/review');
    }

    render(){

        return(
            <div>
                 <h3>Any comment you want to leave?</h3>
                <br />
                <p>Comments</p>
                <form onSubmit={this.submitCommentInfo}>
                <input
                    type="text"
                    placeholder="Comment"
                    value={this.state.comments}
                    onChange={(event) => this.changeField(event, 'comments')}
                />
                <button>Next</button>
                </form>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(Comments);