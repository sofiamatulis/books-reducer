// reducers are only ever called when an action occurs

// state argument is not application state, only the state this reducer is responsible for
// if the state comes as undefined, set it as null
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
    console.log(state, 'lalala');
      return action.payload
  }
  // if the user does not select any book, we just return the default state
  return state;
}
