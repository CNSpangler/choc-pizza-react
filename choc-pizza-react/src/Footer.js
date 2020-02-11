import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <img id="headShot" src="van-pic.png" alt="Ready-to-eat chocolate pizza" />
                <div id="author"> 
                <h1>Vanessa Stevenson</h1>
                <p id="bio">       
                    Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.
                </p>
                </div>
                <div id="button">
                    <button id="recipeButton" type="submit">SHARE RECIPE</button>
                </div>
            </div>
        );
    }
}