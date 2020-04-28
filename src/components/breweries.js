import React, { Component } from 'react';

class Breweries extends Component {

breweryList = () => {
    return this.props.breweries.map(eachBrewery => {
        return (
            <ul>
                <li>
                    {eachBrewery.alias} {eachBrewery.price}
                </li>
            </ul>
        )
    })
}
    render() {
        console.log(this.props)
        return (
            <div>
              { this.breweryList()}
            </div>
        );
    }
}

export default Breweries;