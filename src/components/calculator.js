import React, { Component } from 'react'
import '../stylesheets/styles.scss';

export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'Something'
        }

        this.initialize = this.initialize.bind(this);
    }

    initialize = () => {
        this.setState({
            display: ' '
        })
    }

    render() {
        return (
            <div className="calculator-container">
                <div className="display text-center">{this.state.display}</div>
                <div className="buttons-container">
                    <div className="row g-0">
                        <div className="col-6 d-flex">
                            <button className="btn btn-outline-dark flex-fill" onClick={this.initialize}>Clear</button>
                        </div>
                        <div className="col-3 d-flex">
                            <button className="btn btn-outline-dark flex-fill">/</button>
                        </div>
                        <div className="col-3 d-flex">
                            <button className="btn btn-outline-dark flex-fill">x</button>
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
                            <button className="btn btn-outline-dark flex-fill">-</button>
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
                            <button className="btn btn-outline-dark flex-fill">+</button>
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
                            <button className="btn btn-outline-dark flex-fill">=</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
