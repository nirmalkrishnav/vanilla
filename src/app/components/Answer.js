import React from 'react';
import { withSnackbar } from 'react-simple-snackbar'

class Answer extends React.Component {
    state = {
        options: [],
        answer: null,
        hearts: 0,
        answered: false

    }

    // https://bost.ocks.org/mike/shuffle/
    shuffleOptions = (optionsArr) => {
        var m = optionsArr.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = optionsArr[m];
            optionsArr[m] = optionsArr[i];
            optionsArr[i] = t;
        }
        return optionsArr;
    }

    getOption = () => {
        const op1 = this.props.answer + Math.ceil(Math.random() * 10);
        const op2 = this.props.answer - Math.ceil(Math.random() * 10);
        console.log([this.props.answer, op1, op2]);
        return this.shuffleOptions([this.props.answer, op1, op2]);

    }

    updateAndNotify = () => {
        this.setState({
            answer: this.props.answer,
            options: this.getOption()
        })
    }

    componentDidMount = () => {
        const hz = +localStorage.getItem('hearts');
        this.setState({
            hearts: hz + 0,
            answered: false
        })

    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.answer !== this.props.answer) {
            this.updateAndNotify();
        }
    }

    answerCheck = (e) => {
        if (+e.target.value === this.props.answer) {
            this.setState({
                hearts: this.state.hearts + 1,
                answered: true
            })
            localStorage.setItem('hearts', this.state.hearts);

        } else {
            alert('Try again');
        }
    }

    nextQuestion = () => {
        this.props.onCorrectAnswer(true);
    }

    render() {
        // const { openSnackbar, closeSnackbar } = this.props

        return (<div>

            {this.state.options.map((item, id) => {
                return <div className="optionButton" key={id}>
                    <button value={item} className="ui basic button" onClick={(e) => this.answerCheck(e)}>
                        {item}
                    </button>
                </div>
            })
            }

            <div className="control-row">
                <div className="ui labeled button">
                    <div className="ui red button">
                        <i className="heart icon"></i>
                    </div>
                    <span className="ui basic red left pointing label">
                        {this.state.hearts}
                    </span >
                </div>
                {this.state.answered ? <button className="ui green button" onClick={() => this.nextQuestion}>Continue</button> : null}
            </div>

        </div >)
    }
}

export default withSnackbar(Answer)
