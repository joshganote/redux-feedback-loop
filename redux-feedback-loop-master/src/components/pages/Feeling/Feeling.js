import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// import axios from 'axios';

class Feeling extends Component {

    state = {
        feeling: '',
        flagged: '',
    }

    changeField = (event) => {
        this.setState({
            feeling: event.target.value
        })
    }

    validate = () => {
        let flagged = '';

        if(!this.state.feeling.includes('1','2','3','4','5')){
            flagged = 'invalid number';
        }
        if(flagged){
            this.setState({flagged});
            return false;
        }

        return true;
    }

    submitFeelingInfo = (event) => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid ) {
            console.log(this.state);
        }
        this.props.dispatch({
            type: 'ADD_FEELING',
            payload: this.state,
        });
        this.props.history.push('/content');
    }

    render() {

        return (
            <div>
                <h3>How are you feeling today?</h3>
                <br />
                <p>Feeling?</p>
                <form onSubmit={this.submitFeelingInfo}>
                    <input
                        type="number"
                        placeholder="Pick a number 1-5"
                        value={this.state.feeling}
                        onChange={(event) => this.changeField(event, 'feeling')}
                    />
                    <button>Next</button>
                    <div>{this.state.flagged}</div>
                </form>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(Feeling);