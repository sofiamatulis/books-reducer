export function selectBook(book) {
  // select book is an action creator, it needs to return an action
  // an object with a type property
  // type is always in caps
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
