// export function selectBook(book) {
//   // selectBook is an ActionCreator, it needs to return an action,
//   // an object with a type property.
//   return {
//     type: 'BOOK_SELECTED',
//     payload: book
//   };
// }

export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.
      //type describes the purpose of the action
      //payload: piece of data that describes the actoin being undertaken
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}