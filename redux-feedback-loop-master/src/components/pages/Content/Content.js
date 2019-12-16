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

    validate = () => {
        if (this.state.understanding <=5){
            this.props.history.push('/support');
            return true;
        } else {
            return alert('enter valid number')
        }
    }

    submitUnderstandingInfo = (event) => {
        event.preventDefault();
        this.validate();
        this.props.dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: this.state,
        });
        this.setState({
            understanding: '',
        })
    }

    previousPage = (event) => {
        this.props.history.push('/');
    }

    render(){

        return(
            <div>
                <h3>How well are you understanding the content?</h3>
                <br />
                <p>Understanding?</p>
                <form onSubmit={this.submitUnderstandingInfo}>
                <button onClick={this.previousPage}>Back</button>    
                <input
                    type="number"
                    placeholder="Pick a number 1-5"
                    value={this.state.understanding}
                    onChange={(event) => this.changeField(event, 'understanding')}
                    required
                />
                <button>Next</button>
                </form>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(Content);