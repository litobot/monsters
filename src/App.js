import { Component } from 'react';

import SearchBox from './components/search-box/search-box.component.jsx';
import CardList from './components/card-list/card-list.component.jsx';
import './App.css';

class App extends Component {
  // Whenever this component is constructed, run this constructor method first.
  constructor() {
    super();  // Calls the underlying constructor methods of any other classes you're extending from.

    this.state = {
      // We want an empty array in the case nothing is fetched.
      monsters: [],
      searchField: ''
    }
  }

  // Whatever we place in the {}'s will run on mount (1st rendering)
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => this.setState(() => {
        return {monsters: users}
      }
    ));
  }


  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
        return { searchField }  // Shorthand in JS: If you use a variable as the only field within an object, JS knows to make that key and the value BOTH the name of the varible.
      },
    );
  }

  render() {
    // console.log('render from APP.js');

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    // We've stored this temporarily filtered array of monsters in a variable where all of our render() has access to it - NOT just in the onChange() callback.
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className='App'>
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters' className='search-box' />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
