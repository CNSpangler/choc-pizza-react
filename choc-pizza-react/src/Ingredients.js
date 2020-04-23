import React, { Component } from 'react';

export default class Ingredients extends Component {
    render() {
        return(
            <div id="ingredients">
                <ul id="ul1">
                    <input type="checkbox" name="ingredient" class="strikethrough" value="milk" /> 
                    <label class="strikeThis">1 1/2 cups milk</label><br />
                    <input type="checkbox" name="ingredient" class="strikethrough" value="mascarpone" /> 
                    <label class="strikeThis">1/2 cup mascarpone</label><br />
                    <input type="checkbox" name="ingredient" class="strikethrough" value="salt" /> 
                    <label class="strikeThis">1/2 tsp pink salt</label><br />  
                    <input type="checkbox" name="ingredient" class="strikethrough" value="figs" /> 
                    <label class="strikeThis">1 lb Black Mission Figs</label><br />  
                    <input type="checkbox" name="ingredient" class="strikethrough" value="salt" /> 
                    <label class="strikeThis">1/2 tsp pink salt</label><br />  
                    <input type="checkbox" name="ingredient" class="strikethrough" value="sugar" /> 
                    <label class="strikeThis">1/2 cup brown sugar</label><br />  
                    <input type="checkbox" name="ingredient" class="strikethrough" value="water" />
                    <label class="strikeThis">2-4 tbs water</label><br />  
                </ul>
                <ul id="ul2">
                    <input type="checkbox" name="ingredient" class="strikethrough" value="cream" /> 
                    <label class="strikeThis">1 1/2 cups heavy cream</label><br />
                    <input type="checkbox" name="ingredient" class="strikethrough" value="sugar" /> 
                    <label class="strikeThis">1/3 cup granulated sugar</label><br />
                    <input type="checkbox" name="ingredient" class="strikethrough" value="eggs" /> 
                    <label class="strikeThis">2 egg yolks</label><br />  
                    <input type="checkbox" name="ingredient" class="strikethrough" value="lemon" /> 
                    <label class="strikeThis">1 lemon, juiced</label><br />  
                    <input type="checkbox" name="ingredient" class="strikethrough" value="butter" /> 
                    <label class="strikeThis">2 tbs butter</label><br />  
                    <input type="checkbox" name="ingredient" class="strikethrough" value="pecans" />
                    <label class="strikeThis">1 cup honey roasted pecans, roughly chopped</label><br />  
                </ul>
            </div>
        )
    }
}