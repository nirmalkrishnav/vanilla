import React from 'react';
import Answer from './Answer';
import SnackbarProvider from 'react-simple-snackbar'

class Quiz extends React.Component {
    state = {
        num1: null,
        num2: null,
        ans: null
    };

    populateNumbers = () => {
        const n1 = Math.ceil(Math.random() * 10);
        const n2 = Math.ceil(Math.random() * 10);
        this.setState({
            num1: n1,
            num2: n2
        })
        this.setState({
            ans: n1 + n2
        })

    }

    componentDidMount = () => {
        this.populateNumbers();
    }

    render() {
        return (
            <div>
                <h4>One heart for one right Answer <span  role="img" aria-label="heart smile">💓 😄</span></h4>
                <h1 className="numbers">{this.state.num1}</h1>
                <div className="operation">+</div>
                <h1 className="numbers"> {this.state.num2}</h1>
                <hr />
                <SnackbarProvider>
                    <Answer answer={this.state.ans} onCorrectAnswer={this.populateNumbers} />
                </SnackbarProvider>
            </div>
        )
    }
}

export default Quiz;