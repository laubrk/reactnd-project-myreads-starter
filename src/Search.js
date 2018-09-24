import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import Book from './Book.js'
import * as BooksAPI from './BooksAPI'

class SearchPage extends Component {
  
  state = {
    query: "",
    booksSearched: []
  }
  
  updateQuery = (query) => {
    this.setState({query: query});
    this.getBooksSearched(query)
  }

  /* Reference to solve issue of errors on query: https://gwgnanodegrees.slack.com/archives/CABSA50KA/p1537371946000100?thread_ts=1537371666.000100&cid=CABSA50KA */
  
  /* Reference to address search API and set state for render function: Udacity Building with React, Lesson 3: State Management, Concept 7: Controlled Components */
  
  getBooksSearched = (query) => {
    if(query) {
      BooksAPI.search(query).then((booksSearched) => {
    if(booksSearched.error) {
      this.setState({booksSearched: []});
    } else {
      this.setState({booksSearched: booksSearched})
    }
      })
    } else
      this.setState({booksSearched: []});
  }
  
  render() {
    return(
      //start of search page
        <div className="search-books">
          <div className="search-books-bar">
            {/*Note: href used to navigate, refresh page and render books selectd from search page. <Link to="/" className="close-search">Close</Link> does not refresh page*/}
            <a href="/" className="close-search">Close</a>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                value={this.state.query}
                onChange={(event) => this.updateQuery(event.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {/*Suggestion/assistance from @Forrest on Slack for setting current shelf: "map over each book in the search books. Find any matches and then set a new property called . shelf and set the same shelf from the book found from this.props.books"*/}
              {this.state.booksSearched.map(booksSearched => {
                let shelf = "none"
                this.props.books.map(book => (
                  book.id===booksSearched.id ? 
                  shelf = book.shelf: ""
                ))
                return (
                  <li key={booksSearched.id}>
                    <Book book={booksSearched} moveBook={this.props.moveBook} currentShelf = {shelf}/>
                  </li>
                )
              })
              }
            </ol>
          </div>
        </div>
      //end of search page
    )
  }
}

export default SearchPage

{/* Prior code for search pre React Router change

<a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>

-----------------Original Notes from Udacity ------------------

NOTES: The search from BooksAPI is limited to a particular set of search terms.
You can find these search terms here:
https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
you don't find a specific author or title. Every search is limited by search terms.

---------------------------------------------------------------

*/}