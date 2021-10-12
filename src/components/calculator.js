import React from 'react'
import '../stylesheets/styles.scss';

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstVal: '0',
            expression: '',
            expressionField: '',
            secondVal: '',
            entireExpression: '',
            result: '',
            evaluated: false,
            chaining: false
        }

        this.initialize = this.initialize.bind(this);
        this.evaluate = this.evaluate.bind(this);
        this.handleOperator = this.handleOperator.bind(this);
        this.createEntireExpression = this.createEntireExpression.bind(this);
        this.handleNum = this.handleNum.bind(this);
        this.handleDecimals = this.handleDecimals.bind(this);
    }

    initialize = () => {
        this.setState({
            firstVal: '0',
            expressionField: '',
            expression: '',
            secondVal: '',
            entireExpression: '',
            result: '',
            evaluated: false,
            chaining: false
        })
    }

    evaluate = () => {
        if (this.state.firstVal && this.state.expression && this.state.secondVal) {
            const full = this.createEntireExpression(this.state.firstVal, this.state.expression, this.state.secondVal);

            this.setState({
                expressionField: '',
                entireExpression: full,
                result: eval(full), // WHERE THE RESULT MAGIC HAPPENS
                evaluated: true
            })
        } else if (this.state.firstVal && this.state.expression && !this.state.secondVal) {
            const full = this.createEntireExpression(this.state.firstVal, this.state.expression, '0');

            this.setState({
                expressionField: '',
                entireExpression: full,
                result: eval(full), // WHERE THE RESULT MAGIC HAPPENS
                evaluated: true
            })
        }

    }

    createEntireExpression = (first, operator, second) => {
        const fullExp = `${first} ${operator} ${second}`; // = ${this.state.result}
        //console.log(eval(fullExp))
        return fullExp;
    }

    handleOperator = (o) => {
        if (this.state.expression == '' && !this.state.evaluated) {
            this.setState({
                expressionField: o,
                expression: o
            })
        } else if (this.state.firstVal && this.state.expression || this.state.firstVal && this.state.expression && this.state.secondVal) {
            this.evaluate();
            const prevResult = this.state.result;
            this.setState({
                firstVal: prevResult,
                secondVal: '',
                expressionField: o,
                expression: o,
                chaining: true
            })
        } else if (this.state.evaluated) {
            const prevResult = this.state.result;
            this.initialize();
            this.setState({
                firstVal: prevResult,
                secondVal: '',
                expressionField: o,
                expression: o
            })
        }

    }

    handleNum = (n) => {
        if (!this.state.expression && !this.state.evaluated) {
            if (this.state.firstVal == '0') {
                this.setState({
                    firstVal: n
                });
            } else {
                this.setState({
                    firstVal: this.state.firstVal + n
                });
            }

        } else if (this.state.expression && !this.state.evaluated) {
            this.setState({
                secondVal: this.state.secondVal + n
            });
        } else if (this.state.expression && this.state.evaluated) {
            this.setState({
                secondVal: this.state.secondVal + n,
                chaining: true
            });
        } else if (this.state.evaluated) {
            this.initialize();
        }
    }

    handleDecimals = () => {
        if (!this.state.expression && !this.state.evaluated && !this.state.firstVal.includes('.')) {
            this.setState({
                firstVal: this.state.firstVal + '.'
            })
        } else if (this.state.expression && !this.state.evaluated && !this.state.secondVal.includes('.')) {
            if (!this.state.secondVal) {
                this.setState({
                    secondVal: '0.'
                })
            } else {
                this.setState({
                    secondVal: this.state.secondVal + '.'
                })
            }

        }

    }

    render() {
        return (
            <div className="calculator-container">
                <div className="display" id="display">
                    <div className="row">

                        <div className="col-11">
                            {this.state.evaluated && !this.state.chaining ? this.state.entireExpression :
                                !this.state.chaining && this.state.secondVal == '' ? '' : 
                                this.state.chaining ? this.state.result : this.state.firstVal}
                            {/* {this.state.firstVal} */}
                        </div>
                        <div className="col-1">
                            {this.state.evaluated ? ' ' : ' '}
                        </div>
                    </div>
                    <div className="row last-row">
                        <div className="col-11">
                            {this.state.evaluated && !this.state.chaining ? this.state.result :
                                this.state.secondVal == '' ? this.state.firstVal : this.state.secondVal}
                            {/* {this.state.secondVal} */}
                        </div>
                        <div className="col-1">
                            {/* {this.state.evaluated ? "=" : this.state.expression} */}
                            {this.state.expressionField}
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
