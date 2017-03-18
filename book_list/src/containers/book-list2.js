import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';
  //makes sure that the action flows through all the reducers
  //in the application
  
class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li 
        className="list-group-item" 
        key={book.title}
        onClick={() => this.props.selectBook(book)}>
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    );
  }
}

function mapDispatchToProps(dispatch) {
  //Whenever selectBook is called, the result should be passed
  //to all of our reducers
  //dispatch receives all the actions like a funnel and spits it out
  //to all the reducers in our app
  //Anything returned from the function (first arg) will end up as props on the
  //BookList container
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

function mapStateToProps(state) {
  //takes in the application state
  //whatever is returned form here will show up as props inside of BookList
  return {
    books: state.books
  };
}

//whenever our application state changes, if our state ever changes, this
//container will re-render with the list of books


//connect takes a function and a component and produces a container
//a container is aware of the state contained by redux
//promote Booklist from component to container
//needs to know about this new dispatch method, selectBook, make it 
//available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

//you want to export the container not component

//container is a link between react and redux

//how do you know when to turn a component into a container?
  //in general, you want the most parent component that cares about a particular piece
  //of state to be a container
    //app is the dumb component
      //booklist and book detail each care so they would be smart components

