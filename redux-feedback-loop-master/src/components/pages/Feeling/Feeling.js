import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
// import axios from 'axios';

class Feeling extends Component {

    state = {
        feeling: '',
    }

    changeField = (event) => {
        this.setState({
            feeling: event.target.value
        })
    }

    submitFeelingInfo = (event) => {
        event.preventDefault();

        this.props.dispatch({
            type: 'ADD_FEELING',
            payload: this.state,
        });
        this.props.history.push('/content');
    }

    // I dont really need this it's just nice to know my server is working.
    // componentDidMount(){
    //     this.getFeedBack();
    //   }

    //   getFeedBack = () => {
    //     axios({
    //       method: 'GET',
    //       url: '/feedback',
    //     })
    //     .then((response) => {
    //       this.setState({
    //         feedBack: response.data
    //       }, () => {
    //         console.log(this.state);
    //       });
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     })
    //   }

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
                </form>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(Feeling);