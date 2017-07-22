import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item"> {book.title}</li>
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

// container is a react component that has direct connection to the state managed by redux

export default connect(mapStateToProps)(BookList);
