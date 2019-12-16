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

    validate = () => {
        if (this.state.support <=5){
            this.props.history.push('/comments');
            return true;
        } else {
            return alert('enter valid number')
        }
    }

    submitSupportInfo = (event) => {
        event.preventDefault();
        this.validate();
        this.props.dispatch({
            type: 'ADD_SUPPORT',
            payload: this.state,
        });
        this.setState({
            support: '',
        })
    }

    previousPage = (event) => {
        this.props.history.push('/content');
    }

    render(){

        return(
            <div>
                 <h3>How well are you being supported?</h3>
                <br />
                <p>Support?</p>
                <form onSubmit={this.submitSupportInfo}>
                <button onClick={this.previousPage}>Back</button> 
                <input
                    type="number"
                    placeholder="Pick a number 1-5"
                    value={this.state.support}
                    onChange={(event) => this.changeField(event, 'support')}
                    required
                />
                <button>Next</button>
                </form>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(Support);