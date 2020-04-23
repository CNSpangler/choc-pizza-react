import React, { Component } from 'react';
import Instructions from './Instructions.js';
import Ingredients from './Ingredients.js';
import Footer from './Footer.js';

export default class Body extends Component {
    render() {
        return (
            <div>
                <div id="angles"></div>
                <section>
                    <div id="post">
                        <h1>
                            Chocolate Pizza
                        </h1>
                        <p id="posted">
                            POSTED ON 15 DEC 2013/DESSERTS<br />
                            Hello, {this.props.welcome.name}!<br />
                            Today is: {this.props.welcome.date}
                        </p> 
                    </div>                  
                    <div id="printDiv">
                        <p id="print">
                            <img src="print-icon.png" alt="Print icon" />
                            PRINT
                        </p>
                    </div>
                </section>
                <div id="pizzaContainer">
                    <img id="chocolatePizza" src="choco-pizza.png" alt="Delicious Chocolate Pizza!" />
                </div>
                <Instructions />
                <Ingredients />
                <div id="angles"></div>
            </div>
        );
    }
}