import { Component } from 'react';

import Card from '../card/card.component.jsx';
import './card-list.styles.css';

class CardList extends Component {
  
  render() {
    // We've destructured monsters so we can use it multiple places.
    // this.props contains ALL of the props passed down to CardList.
    // Therefore, we can access the monsters [] after destructuring.
    const { monsters } = this.props;
    // `this` === CardList here
    // We've passed monsters to CardList within the App component.
    return (

      <div className='card-list'>
        {monsters.map(monster => {
          return (
            <Card monster={monster} />
        )})}
      </div>
    );
  }
}

export default CardList;