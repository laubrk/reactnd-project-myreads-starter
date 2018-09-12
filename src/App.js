import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import './Book.js'
import SearchPage from './Search.js'
import AllBooks from './BooksPage.js'

class BooksApp extends Component {
  
  //* Temp code to see BooksAPI data available
  componentDidMount() {
   BooksAPI.getAll().then((books) => {
     this.setState({books});
     console.log(books);
   })
 }
  
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          //Start of Search Page was here
        <SearchPage />
        ) : (
          //Start of Book Page was here
        <AllBooks />
        )}
      </div>
    )
  }
}

export default BooksApp
