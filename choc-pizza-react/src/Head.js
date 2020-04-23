import React, { Component } from 'react';

export default class Head extends Component {
    render() {
        return(
            <div>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <link href="https://fonts.googleapis.com/css?family=Lobster&display=swap" rel="stylesheet" />
                <title>Chocolate Pizza</title>
            </div>
        )
    }
}