import React, { Component } from 'react'
import '../stylesheets/styles.scss';

export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstVal: '',
            expression: '',
            secondVal: '',
            entireExpression: '1 + 2 = 3',
            result: '3',
            evaluated: false
        }

        this.initialize = this.initialize.bind(this);
        this.evaluate = this.evaluate.bind(this);
        this.handleOperator = this.handleOperator.bind(this);
        this.createEntireExpression = this.createEntireExpression.bind(this);
    }

    initialize = () => {
        this.setState({
            firstVal: '0',
            expression: '',
            secondVal: '',
            entireExpression: '',
            result: '',
            evaluated: false
        })
    }

    evaluate = () => {
        this.setState({
            expression: '',
            entireExpression: this.createEntireExpression(),
            evaluated: true
        })
    }

    createEntireExpression = () => {
        const fullExp = `${this.state.firstVal} ${this.state.expression} ${this.state.secondVal}`; // = ${this.state.result}
        return fullExp;
    }

    handleOperator = (o) => {
        if (this.state.expression == '' && !this.state.evaluated) {
            this.setState({
                expression: o
            })
        }

    }

    render() {
        return (
            <div className="calculator-container">
                <div className="display">
                    <div className="row">

                        <div className="col-11">
                            {this.state.evaluated ? this.state.entireExpression :
                                this.state.secondVal == '' ? '' : this.state.firstVal}
                            {/* {this.state.firstVal} */}
                        </div>
                        <div className="col-1">
                            {this.state.evaluated ? ' ' : ' '}
                        </div>
                    </div>
                    <div className="row last-row">
                        <div className="col-11">
                            {this.state.evaluated ? this.state.result :
                                this.state.secondVal == '' ? this.state.firstVal : this.state.secondVal}
                            {/* {this.state.secondVal} */}
                        </div>
                        <div className="col-1">
                            {/* {this.state.evaluated ? "=" : this.state.expression} */}
                            {this.state.expression}
                        </div>

                    </div>
                </div>
                <div className="buttons-container">
                    <div className="row g-0">
                        <div className="col-6 d-flex">
                            <button className="btn btn-outline-dark flex-fill" onClick={this.initialize}>Clear</button>
                        </div>
                        <div className="col-3 d-flex">
                            <button className="btn btn-outline-dark flex-fill" onClick={() => { this.handleOperator('/') }} >/</button>
                        </div>
                        <div className="col-3 d-flex">
                            <button className="btn btn-outline-dark flex-fill" onClick={() => { this.handleOperator('*') }} >x</button>
                        </div>
                    </div>
                    <div className="row g-0">
                        <div className="col-3 d-flex">
                            <button className="btn btn-outline-dark flex-fill">7</button>
                        </div>
                        <div className="col-3 d-flex">
                            <button className="btn btn-outline-dark flex-fill">8</button>
                        </div>
                        <div className="col-3 d-flex">
                            <button className="btn btn-outline-dark flex-fill">9</button>
                        </div>
                        <div className="col-3 d-flex">
                            <button className="btn btn-outline-dark flex-fill" onClick={() => { this.handleOperator('-') }}>-</button>
                        </div>
                    </div>
                    <div className="row g-0">
                        <div className="col-3 d-flex">
                            <button className="btn btn-outline-dark flex-fill">4</button>
                        </div>
                        <div className="col-3 d-flex">
                            <button className="btn btn-outline-dark flex-fill">5</button>
                        </div>
                        <div className="col-3 d-flex">
                            <button className="btn btn-outline-dark flex-fill">6</button>
                        </div>
                        <div className="col-3 d-flex">
                            <button className="btn btn-outline-dark flex-fill" onClick={() => { this.handleOperator('+') }}>+</button>
                        </div>
                    </div>
                    <div className="row g-0">
                        <div className="col-3 d-flex">
                            <button className="btn btn-outline-dark flex-fill">1</button>
                        </div>
                        <div className="col-3 d-flex">
                            <button className="btn btn-outline-dark flex-fill">2</button>
                        </div>
                        <div className="col-3 d-flex">
                            <button className="btn btn-outline-dark flex-fill">3</button>
                        </div>
                        <div className="col-3 d-flex">
                            <button className="btn btn-outline-dark flex-fill">.</button>
                        </div>
                    </div>
                    <div className="row g-0">
                        <div className="col-6 d-flex">
                            <button className="btn btn-outline-dark flex-fill">0</button>
                        </div>
                        <div className="col-6 d-flex">
                            <button className="btn btn-outline-dark flex-fill" onClick={this.evaluate}>=</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
