import React from 'react'
import '../stylesheets/styles.scss';

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expression: '0',
            result: '',
            evaluated: false
        }

        this.initialize = this.initialize.bind(this);
        this.handleOperator = this.handleOperator.bind(this);
        this.handleNum = this.handleNum.bind(this);
    }

    // Reset inputs
    initialize = () => {
        this.setState({
            expression: '0',
            result: '',
            evaluated: false
        })
    }

    handleNum = (n) => {
        if (this.state.expression == 0) {
            this.setState({
                expression: n
            })
        } else {
            if (this.state.expression.endsWith('+') || this.state.expression.endsWith('-') || this.state.expression.endsWith('*') || this.state.expression.endsWith('/')) {
                this.setState({
                    expression: this.state.expression + " " + n
                })
            } else {
                this.setState({
                    expression: this.state.expression + n
                })
            }
            
        }

    }

    handleOperator = (o) => {
        //const operators = ['+', '-', '*', '/'];
        if (this.state.evaluated) {
            this.setState({
                evaluated: false,
                expression: this.state.result + " " + o
            });
        } else {
            if (!this.state.expression.endsWith(o)) {
                this.setState({
                    expression: this.state.expression + " " + o
                });
            }
        }

        
    }

    // Function to handle decimal values
    handleDecimals = () => {
        
    }

    // Function to handle negating values (-1, -6, etc)
    negate = () => {

    }

    // Function to handle evaluation
    evaluate = () => {
        let evaluationResult = eval(this.state.expression);
        this.setState({
            result: evaluationResult,
            evaluated: true
        })
        
    }


    render() {
        return (
            <div className="calculator-container">
                <div className="display" id="display">
                    <div className="row">

                        <div className="col-11">
                            {this.state.result && this.state.evaluated ? this.state.expression : ''}
                        </div>
                        <div className="col-1">
                        </div>
                    </div>
                    <div className="row last-row">
                        <div className="col-11">
                            {this.state.result && this.state.evaluated ? this.state.result : this.state.expression}
                        </div>
                        <div className="col-1">
                        </div>

                    </div>
                </div>
                <div className="buttons-container">
                    <div className="row g-0">
                        <div className="col-6 d-flex">
                            <button className="btn btn-outline-dark flex-fill" id="clear" onClick={this.initialize}>Clear</button>
                        </div>
                        <div className="col-3 d-flex">
                            <button className="btn btn-outline-dark flex-fill" id="divide" onClick={() => { this.handleOperator('/') }} >/</button>
                        </div>
                        <div className="col-3 d-flex">
                            <button className="btn btn-outline-dark flex-fill" id="multiply" onClick={() => { this.handleOperator('*') }} >x</button>
                        </div>
                    </div>
                    <div className="row g-0">
                        <div className="col-3 d-flex">
                            <button className="btn btn-outline-dark flex-fill" id="seven" onClick={() => { this.handleNum('7') }}>7</button>
                        </div>
                        <div className="col-3 d-flex">
                            <button className="btn btn-outline-dark flex-fill" id="eight" onClick={() => { this.handleNum('8') }}>8</button>
                        </div>
                        <div className="col-3 d-flex">
                            <button className="btn btn-outline-dark flex-fill" id="nine" onClick={() => { this.handleNum('9') }}>9</button>
                        </div>
                        <div className="col-3 d-flex">
                            <button className="btn btn-outline-dark flex-fill" id="subtract" onClick={() => { this.handleOperator('-') }}>-</button>
                        </div>
                    </div>
                    <div className="row g-0">
                        <div className="col-3 d-flex">
                            <button className="btn btn-outline-dark flex-fill" id="four" onClick={() => { this.handleNum('4') }}>4</button>
                        </div>
                        <div className="col-3 d-flex">
                            <button className="btn btn-outline-dark flex-fill" id="five" onClick={() => { this.handleNum('5') }}>5</button>
                        </div>
                        <div className="col-3 d-flex">
                            <button className="btn btn-outline-dark flex-fill" id="six" onClick={() => { this.handleNum('6') }}>6</button>
                        </div>
                        <div className="col-3 d-flex">
                            <button className="btn btn-outline-dark flex-fill" id="add" onClick={() => { this.handleOperator('+') }}>+</button>
                        </div>
                    </div>
                    <div className="row g-0">
                        <div className="col-3 d-flex">
                            <button className="btn btn-outline-dark flex-fill" id="one" onClick={() => { this.handleNum('1') }}>1</button>
                        </div>
                        <div className="col-3 d-flex">
                            <button className="btn btn-outline-dark flex-fill" id="two" onClick={() => { this.handleNum('2') }}>2</button>
                        </div>
                        <div className="col-3 d-flex">
                            <button className="btn btn-outline-dark flex-fill" id="three" onClick={() => { this.handleNum('3') }}>3</button>
                        </div>
                        <div className="col-3 d-flex">
                            <button className="btn btn-outline-dark flex-fill" id="decimal" onClick={() => { this.handleDecimals() }}>.</button>
                        </div>
                    </div>
                    <div className="row g-0">
                        <div className="col-6 d-flex">
                            <button className="btn btn-outline-dark flex-fill" id="zero" onClick={() => { this.handleNum('0') }}>0</button>
                        </div>
                        <div className="col-6 d-flex">
                            <button className="btn btn-outline-dark flex-fill" id="equals" onClick={this.evaluate}>=</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
