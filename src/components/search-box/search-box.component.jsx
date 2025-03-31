import { Component } from 'react';

import './search-box.styles.css';

class SearchBox extends Component {

  render () {

    return (
      <input 
        className={`search-box ${this.props.className}`} 
        type='search' 
        placeholder={this.props.placeholder}
        // We have to say "THIS.onSearchChange" because we've moved it out of render() into our Class.
        // So we have to refer to the class with `this`.
        onChange={this.props.onChangeHandler} 
      />  

      /* 
      We've created two states for this component so far:
      - monsters --> Begins as an empty array and is populated with a fetch call to the API.
      - searchField --> What's typed in the input. Begins as an empty string.

      - filteredMonsters is a variable that holds an array of monsters gathered from the API
      --> The monsters it holds at any moment is a filtered version of monsters state based on the state of searchField.
      -----> SO, if text in the searchField is deleted, the OG monsters array is reevaluated agains that updated searchField.
      --------> INSTEAD of simply filtering out the OG array, because we can't REpopulated it once it's been filtered.
       */
    )
  }
}

export default SearchBox;