import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


class Feeling extends Component {

    state = {
        feeling: '',
    };

    changeField = (event) => {
        event.preventDefault();
        this.setState({
            feeling: event.target.value
        })
    }
    // Didn't want to mess with creating a min and max value
    // but at least this will make sure the user doesn't pick a number over 5
    // I worked waaaay to hard on this, probably two or three hours worth.
    // I googled input validation and watched 4 different videos and looked at
    // different websites thinking I needed a complicated solution. At one point
    // I installed react-inputs-validation from npm and tried working with that. All those things 
    // I tried working with are at the bottom of this page. Just went back to your mantra "it's just javascript"
    //  Really happy with how effective this small amount of code is
    
    validate = () => {
        if (this.state.feeling <=5){
            // user will be sent to next page if valid number is given.
            // same setup repeats on the next couple pages
            this.props.history.push('/content');
            return true;
        } else {
            return alert('enter valid number')
        }
    }

    submitFeelingInfo = (event) => {
        event.preventDefault();
        this.validate();
        this.props.dispatch({
            type: 'ADD_FEELING',
            payload: this.state,
        });
        // if user selects an invalid number this will reset input
        this.setState({
            feeling: '',
        })
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
                        required
                    />
                    <button>Next</button>

                </form>

            </div>
        )
    }
}

export default connect(mapStoreToProps)(Feeling);

// playing with different input validation


      // let flagged = '';

        // if(!this.state.feeling.includes('1','2','3','4','5')){
        //    return flagged = 'invalid number';
        // }
        // if(flagged){
        //     this.setState({flagged});
        //     return false;
        // }

        // // return true;
        // let flagged = false;
        // const error = {};

        // if (this.state.feeling >= 5){
        //     flagged = true;

        // } 

    //     <Textbox onSubmit={this.submitFeelingInfo}
    //     id={'number'}
    //     type="text"
    //     value={number}
    //     placeholder="Number 1-5"
    //     onChange={(number, event) => {this.setState({number});
    //     console.log(event)}}
    //     validationOption={{
    //         type:'number',
    //         min: 0,
    //         max: 5
    //     }}

    //     />
    //   <button>Next</button>

    // handleValidation() {
        //     let feeling = this.state.feeling;
        //     let error = '';
        //     let formIsValid = true;
    
        //     if(!feeling){
        //         formIsValid = false;
        //         error["feeling"] = "Cannot be empty";
        //     }
        //     if (typeof feeling !== "undefined") {
        //         if(!feeling.match('1','2','3','4','5')){
        //             formIsValid = false;
        //             error["feeling"] = "Pick number 1-5";
        //         }
        //     }
        //     this.setState({error: error});
        //     return formIsValid
        // }