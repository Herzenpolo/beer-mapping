import React, { Component } from 'react';


class Gallery extends Component {

    componentDidMount=()=> {
        console.log(this.props)
    }

 gallery = () => {
     return this .props.gallery.map(eachPhoto => {
         return (
             <ul>
                 <li key={eachPhoto.id}>
                     <img src={eachPhoto.src.small} alt={eachPhoto.id}/>
                 </li>
             </ul>
         )
     })
 }

    render() {
 console.log(this.props.gallery)
        return (
            <div>
            {this.gallery()}
            </div>
        );
    }
}

export default Gallery