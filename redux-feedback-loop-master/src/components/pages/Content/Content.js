import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class Content extends Component {
    state = {
        understanding: '',
    }

    changeField = (event) => {
        this.setState({
            understanding: event.target.value
        })
    }

    submitUnderstandingInfo = (event) => {
        event.preventDefault();

        this.props.dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: this.state,
        });
        this.props.history.push('/support');
    }

    render(){

        return(
            <div>
                <h3>How well are you understanding the content?</h3>
                <br />
                <p>Understanding?</p>
                <form onSubmit={this.submitUnderstandingInfo}>
                <input
                    type="number"
                    placeholder="Pick a number 1-5"
                    value={this.state.understanding}
                    onChange={(event) => this.changeField(event, 'understanding')}
                />
                <button>Next</button>
                </form>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(Content);