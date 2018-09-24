import React, {Component} from 'react'
import Book from './Book.js'
import {Link} from 'react-router-dom'


class AllBooks extends Component {
  render() {
    //console.log(this.props.books);
    return(
      //start of bookpage
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {/* Start of Shelf */}
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">

                        {this.props.books
                          .filter(book => book.shelf==='currentlyReading')
                          .map(book => (
                            <li key = {book.id}>
                              <Book book={book} moveBook={this.props.moveBook} currentShelf='currentlyReading'/>
                            </li>
                          ))
                        }

                    </ol>
                  </div>
                </div>
                {/* End of Shelf */}

                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                       {this.props.books
                        .filter(book => book.shelf==='wantToRead')
                        .map(book => (
                          <li key = {book.id}>
                            <Book book={book} moveBook={this.props.moveBook} currentShelf='wantToRead'/>
                          </li>
                        ))
                      }

                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                       {this.props.books
                        .filter(book => book.shelf==='read')
                        .map(book => (
                          <li key = {book.id}>
                            <Book book={book} moveBook={this.props.moveBook} currentShelf='read'/>
                          </li>
                        ))
                      }
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
              
            </div>
          </div>
    )
  }
}

export default AllBooks