// export default function(state = null, action) {
//   switch(action.type) {
//   case 'BOOK_SELECTED':
//     return action.payload;
//   }

//   return state;
// }

// State argument is not application state, only the state
// this reducer is responsible for
//redux won't let you return undefined value;
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED' : 
    //don't mutate state, always return a fresh object--> this is new state
      return action.payload;

  }

  return state;
}

//redux sends some booting up signals through the reducers
//action comes through, don't know what the type is so we
//just return state (and default state is null)