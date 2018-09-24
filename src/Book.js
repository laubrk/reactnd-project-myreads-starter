import React, {Component} from 'react'

class Book extends Component {
  
  change = (event) => {
    this.props.moveBook(this.props.book, event.target.value)
  }

  render () {
       
    let image=(this.props.book.imageLinks) ? this.props.book.imageLinks.thumbnail : ""
    
    return(
    <div className="book">
      <div className="book-top">
        <div className="book-cover"
         style={{
          width: 128,
          height: 193,
          backgroundImage: `url('${image}')`
          }}>
        </div>
        <div className="book-shelf-changer">
        
        {/*Reference source for default selection and event handling: https://reactjs.org/docs/forms.html
        https://stackoverflow.com/questions/21733847/react-jsx-selecting-selected-on-selected-select-option
        */}
      
        <select onChange={this.change} value={this.props.currentShelf}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
        </div>
      </div>
      <div className="book-title">{this.props.book.title}</div>
      <div className="book-authors">{this.props.book.authors}</div>
    </div>
   )
  }
}

export default Book

{/* Was directly under book-shelf-changer

<select>
  <option value="move" disabled>Move to...</option>
  <option value="currentlyReading">Currently Reading</option>
  <option value="wantToRead">Want to Read</option>
  <option value="read">Read</option>
  <option value="none">None</option>
</select>

*/}