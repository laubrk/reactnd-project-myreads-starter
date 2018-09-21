import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import './Book.js'
import SearchPage from './Search.js'
import AllBooks from './BooksPage.js'
import {Route} from 'react-router-dom'

class BooksApp extends Component {
  
  state = {
    books: []

    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    //showSearchPage: false
  }

// State above and BooksAPI call code direction from Udacity video lessons
// This will call the API.getAll method. Books put into the array and update the state
  componentDidMount = () => {
   BooksAPI.getAll().then((books) => {
     this.setState({books});
     //console.log(books);
   })
 }
// Based on suggested approach from @Macrunning in Slack.
// Avoids .then on BooksAPI.update due to async promise and to update site right away.
// Alternative method in comments also works but is .then approach.
  moveBook = (book, shelf) => {
    BooksAPI.update(book,shelf);
    
    const bookIndex = this.state.books.findIndex (
      oldBook => oldBook.id === book.id
    );
    
    console.log(bookIndex)
    
    if (bookIndex !== -1) {
      const newBook = Object.assign({}, this.state.books);
        console.log(this.state.books);
        console.log(newBook);
        newBook[bookIndex].shelf = shelf;
        this.setState({newBook})
    };
  }
    
  render() {
    
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <AllBooks books = {this.state.books}
          moveBook = {this.moveBook}
          />
        )}/>

       <Route path="/search" render={() => (
          <SearchPage books = {this.state.books}
          moveBook = {this.moveBook}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp

/*
Code saved for reference prior to working on react router functionality

render() {
    
    const books = BooksAPI;
    
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          //Start of Search Page was here
        <SearchPage books = {books}/>
        ) : (
          //Start of Book Page was here
        <AllBooks books = {this.state.books}/>
        )}
      </div>
    )
  }

Some alternate work on moveBook function

moveBook = (book, shelf) => {
    BooksAPI.update(book,shelf).then((book, shelf) => {
    this.setState({book, shelf});
    })
     BooksAPI.update(book, shelf);
    
    const bookIndex = this.state.books.findIndex (
      oldBook => oldBook.id === book.id
    );
    console.log(bookIndex)
  }

works:
moveBook = (book, shelf) => {
    BooksAPI.update(book,shelf)
      .then((books) => BooksAPI.getAll(books))
      .then(books => this.setState({books})
    )}

works:
moveBook = (book, shelf) => {
    BooksAPI.update(book,shelf);
    
    const bookIndex = this.state.books.findIndex (
      oldBook => oldBook.id === book.id
    );
   
    if (bookIndex !== -1)
       {this.setState({book});
  } else {
    //this.setState(newState => ({
      //newState.books
    //}));
  }
   BooksAPI.getAll().then(books => this.setState({books}));
    //const newState = bookIndex;
    console.log(bookIndex)
  };


  */