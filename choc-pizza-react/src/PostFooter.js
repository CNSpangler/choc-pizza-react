import React, { Component } from 'react';

export default class PostFooter extends Component {
    render() {
        return(
            <section id="post-footer">
                <img id="small" src={this.props.image} alt="Small logo" />
                <p id="rights">
                    Delicious &copy; 2013 &bull; All rights reserved.<br />
                    Proudly published with Ghost.
                </p>    
            </section>
        )
    }
}

