import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <img id={this.props.author.id} src={this.props.author.source} alt={this.props.author.alt} />
                <div id="author"> 
                <h1>Vanessa Stevenson</h1>
                <p id="bio">       
                    {this.props.author.bio}
                </p>
                </div>
                <div id="button">
                    <button id="recipeButton" type="submit">SHARE RECIPE</button>
                </div>
            </div>
        );
    }
}