import React from 'react';

class Answer extends React.Component {
    state = {
        options: [],
        answer: null
    }
    // https://bost.ocks.org/mike/shuffle/
    shuffleOptions = (optionsArr) => {
        var m = optionsArr.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            console.log(i);
            t = optionsArr[m];
            optionsArr[m] = optionsArr[i];
            optionsArr[i] = t;
        }
        console.log(optionsArr)
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


    componentDidUpdate = (prevProps) => {
        if (prevProps.answer !== this.props.answer) {
            this.updateAndNotify();
        }
    }

    answerCheck = (e) => {
console.log(e.target.value)
    }

    render() {

        return (<div>
            {this.props.answer}<br />

            {this.state.options.map((item, id) => {
                return <div className="optionButton" key={id}>
                    <button value={item} className="ui basic button" onClick={(e) => this.answerCheck(e)}>
                        {item}
                    </button>
                </div>
            })}
        </div>)
    }
}

export default Answer;