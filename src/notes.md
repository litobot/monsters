From memory:

What did we do in Monsters?

We now have Single Page Application that fetches data from an API.
The app technically has 4 components (including the main 'App' parent).
Nested in that is the SearchBox and CardList.
Nested inside the CardList is Card.

Components are styled with CSS files.
Importing is done more to show where those files came from.
However, style sheets can apply to ANY class/id found within the project. BE CAREFUL!


Data is passed from parent to child component via props.
We destructure the props in the component we're using them in by specifying what we want out of that props object on the left hand side of the operator and using `this.state.(whatever-that-state's-name-is)`


- App is responsible for making the API call and uses the promises structure to do so.
- Response data is converted to JSON then set to the state of the APP.
- This data arrives as an array of objects (one for each monster).
- We use this data in conjunction with our SearchBox component to display any monsters we search for within that input field.
- We then use search inputs to filter that array stored in state to another variable instead of modifying the original.
- This allows us to repopuplate all displayed monsters upon deleting filtering parameters because we're simply updating the state with that array filtered from the original instead of narrowing down an array we can't UN-filter.

- We made a function called onSearchChange to update the searchFiled state of our App component.
- Our state initializes as an empty string, but is updated based on what the user types into the search input in our SearchBox component.
- We pass onSearchChange to our SearchBox component. Data Down/Action Up.
--> This way, we can 