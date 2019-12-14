import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class Support extends Component {
    state = {
        support: '',
    }

    changeField = (event) => {
        this.setState({
            support: event.target.value
        })
    }

    submitSupportInfo = (event) => {
        event.preventDefault();

        this.props.dispatch({
            type: 'ADD_SUPPORT',
            payload: this.state,
        });
        this.props.history.push('/comments');
    }

    render(){

        return(
            <div>
                 <h3>How well are you understanding the content?</h3>
                <br />
                <p>Support?</p>
                <form onSubmit={this.submitSupportInfo}>
                <input
                    type="number"
                    placeholder="Pick a number 1-5"
                    value={this.state.support}
                    onChange={(event) => this.changeField(event, 'support')}
                />
                <button>Next</button>
                </form>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(Support);