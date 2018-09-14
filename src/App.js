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

//* Temp code to see BooksAPI data available
  componentDidMount() {
   BooksAPI.getAll().then((books) => {
     this.setState({books});
     console.log(books);
   })
 }

  render() {
    
    const books = BooksAPI;
    
    return (
      <div className="app">
        <Route path="/" exact render={() => (
          <AllBooks books = {this.state.books}/>
        )}/>

       <Route path="/search" render={() => (
          <SearchPage books = {books}/>
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
  
  */