import React, { Component } from 'react';
import Instructions from './Instructions.js';
import Ingredients from './Ingredients.js';
import Footer from './Footer.js';

export default class Body extends Component {
    render() {
        
      

        // function Welcome(props) {
        //     return <p id="posted">
        //         POSTED ON 15 DEC 2013/DESSERTS<br />
        //         Hello, {props.name}!<br />
        //         Today is: {props.date}</p>
        // }

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
                            Hello, {this.props.welcomeObject.name}!<br />
                            Today is: {this.props.welcomeObject.date}
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
                <Footer />
                <section id="post-footer">
                    <img id="small" src="small-logo.png" alt="Small logo" />
                    <p id="rights">
                        Delicious &copy; 2013 &bull; All rights reserved.<br />
                        Proudly published with Ghost.
                    </p>    
                </section>
            </div>
        );
    }
}