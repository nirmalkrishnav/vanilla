import React from 'react';
import { withSnackbar } from 'react-simple-snackbar'

class Answer extends React.Component {
    state = {
        options: [],
        answer: null,
        hearts: 0,
        answered: false,
        correctAnswer: false

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
        const op1 = this.props.answer + Math.ceil(Math.random() * 1000);
        const op2 = this.props.answer - Math.ceil(Math.random() * 1000);
        console.log([this.props.answer, op1, op2]);
        return this.shuffleOptions([this.props.answer, op1, op2]);

    }

    updateAndNotify = () => {
        this.setState({
            answer: this.props.answer,
            options: this.getOption(),
            answered: false,
            correctAnswer: false
        })
    }

    componentDidMount = () => {
        const hz = +localStorage.getItem('hearts');
        this.setState({
            hearts: hz + 0,
        })

    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.answer !== this.props.answer) {
            this.updateAndNotify();
        }
    }

    answerCheck = (e) => {
        if (+e.target.value === this.props.answer) {
            localStorage.setItem('hearts', this.state.hearts + 1);
            this.setState({
                hearts: this.state.hearts + 1,
                answered: true,
                correctAnswer: true
            })

        } else {
            this.setState({
                answered: true,
                correctAnswer: false
            })
        }
    }

    nextQuestion = () => {
        this.props.onCorrectAnswer(true);
    }

    tryAgain = () => {
        this.setState({
            answered: false,
            correctAnswer: false
        })
    }

    render() {
        // const { openSnackbar, closeSnackbar } = this.props

        return (<div>
            {!this.state.answered ? this.state.options.map((item, id) => {
                return <div className="optionButton" key={id}>
                    <button disabled={this.state.answered} value={item} className="ui basic button" onClick={(e) => this.answerCheck(e)}>
                        {item}
                    </button>
                </div>
            }) : null}


            {this.state.answered && this.state.correctAnswer ?
                <div>
                    <div className="newHeart">
                        <em>Well done!</em>
                        <span role="img" aria-label="heart">💓 + 1</span>
                        <button className="ui green button" onClick={() => this.nextQuestion()}>Next</button>
                    </div>
                </div> : null
            }

            {this.state.answered && !this.state.correctAnswer ?
                <div>
                    <div className="newHeart">
                        <em>"No problem buddy, keep learning!"</em>
                        <span  role="img" aria-label="panda">🐼🙂</span>
                        <button className="ui grey button" onClick={() => this.tryAgain()}>Try again</button>
                    </div>
                </div> : null
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
            </div>

        </div >)
    }
}

export default withSnackbar(Answer)
