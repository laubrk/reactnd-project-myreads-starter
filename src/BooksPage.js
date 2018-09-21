import React, {Component} from 'react'
import Book from './Book.js'
import {Link} from 'react-router-dom'


class AllBooks extends Component {
  render() {
    console.log(this.props.books);
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
              {/*
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
              */}
              <Link to="/search">Add a book</Link>
              
            </div>
          </div>
    )
  }
}

export default AllBooks

{/* Start of Book Original Code Reference Moved to Book Component
  <div className="book">
    <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div>
      <div className="book-shelf-changer">
        <select>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    </div>
    <div className="book-title">To Kill a Mockingbird</div>
    <div className="book-authors">Harper Lee</div>
  </div>
End of Book */}