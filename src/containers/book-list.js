import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

// bind action creators is a function that makes sure that the action goes to the reducers

class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
        onClick={() => this.props.selectBook(book)}
        key={book.title}
        className="list-group-item">
        {book.title}</li>
      )
    })
  }
  render() {
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// how you connect to redux: (take the state as an argument and pass it as props inside of the container)
function mapStateToProps(state) {
  return {
    books: state.books
  };
}

//anything returnd from this function will end up as props on the booklist container
function mapDispatchToProps(dispatch) {
  //whenever select book is called , the result should be passed to all reducers
  return bindActionCreators({selectBook: selectBook }, dispatch)
}
// to take what gets returned from actions and is passed through the reducers

// container is a react component that has direct connection to the state managed by redux

// Promote book list from a component to a container -- it needs to know about the new dispatch method , make it available as props
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

//action create returns an action(click calls the action creator). action is sent to reducers, updates the state!
