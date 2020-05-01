import React, { Component } from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://images.pexels.com/photos/1105325/bbq-meet-eating-diner-1105325.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    altText: 'Image 1',
    caption: 'Burgers on Barbecue',
    header: 'Burgers',
    key: '1'
  },
  {
    src: 'https://images.pexels.com/photos/3641761/pexels-photo-3641761.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    altText: 'Slide 2',
    caption: 'Smoked Brisket',
    header: 'Brisket',
    key: '2'
  },
  {
    src: 'https://images.pexels.com/photos/1267289/pexels-photo-1267289.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    altText: 'Slide 3',
    caption: 'Veza Sur Flight',
    header: 'Veza Sur',
    key: '3'
  }
];


class Home extends Component {

    render() {
        
        return (
            <div>
                <UncontrolledCarousel items={items} />
                
            </div>
        );
    }
}

export default Home;

