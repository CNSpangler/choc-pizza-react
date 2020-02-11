import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return(
            <div>
                <div id="branding">
                    <img id="logo" src="logo.png" alt="logo" />
                    <div id="branding-text">
                        <h3>Delicious</h3>
                        <p id="best">THE BEST FOOD BLOG ON THE WEB.</p>
                    </div>
                </div>
                <nav>
                    <div class="nav-div" id="rss">
                        <img class="icon" src="rss-icon.png" alt="RSS icon" />
                        <img class="icon" src="mail-icon.png" alt="Email icon" />
                    </div>
                    <div class="nav-div">
                        <img class="icon" src="fb-icon.png" alt="Facebook icon" />
                        <img class="icon" src="twit-icon.png" alt="Twitter icon" />
                        <img class="icon" src="gp-icon.png" alt="GP icon" />
                        <img class="icon" src="insta-icon.png" alt="Instagram icon" />
                        <img class="icon" src="flic-icon.png" alt="Flickr icon" />
                        <img class="icon" src="pint-icon.png" alt="Pinterest icon" />
                    </div>
                </nav>
            </div>
        )
    }
}