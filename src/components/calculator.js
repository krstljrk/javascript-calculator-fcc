import React, { Component } from 'react'
import '../stylesheets/styles.scss';

export default class Calculator extends Component {
    render() {
        return (
            <div className="calculator-container">
                <div className="display">Display Placeholder Text</div>
                <div className="buttons-container">
                    <div className="row">
                        <div className="col-6">
                            <button className="btn btn-outline-dark">Clear</button>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-outline-dark">/</button>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-outline-dark">x</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <button className="btn btn-outline-dark">7</button>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-outline-dark">8</button>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-outline-dark">9</button>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-outline-dark">-</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <button className="btn btn-outline-dark">4</button>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-outline-dark">5</button>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-outline-dark">6</button>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-outline-dark">+</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <button className="btn btn-outline-dark">1</button>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-outline-dark">2</button>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-outline-dark">3</button>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-outline-dark">.</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <button className="btn btn-outline-dark">0</button>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-outline-dark">=</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
