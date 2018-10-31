import React, {Component} from 'react'
import Book from './Book'

class BookList extends Component{
  state = {
    search: ""
  }

  handleSearchChange = (e)=>{
    this.setState({
      search: e.target.value
    })
  }

  render(){

    let search = this.state.search
    let ListOfBooks = this.props.books.filter(book =>
      book.title.toLowerCase().includes(search.toLowerCase())
      || book.author.toLowerCase().includes(search.toLowerCase()))
    .map(book => <Book key={book.id} addBook={this.props.onClick} book={book} />)

    return (
      <div>
        <div id="search">
          <input id="searchInput" type="text" name="search" placeholder="Search by Title or Author" onChange={this.handleSearchChange}>

          </input>
          <button>
            Search
          </button>
        </div>
        <div>
          {ListOfBooks}
        </div>
      </div>
    )
  }

}


export default BookList;
