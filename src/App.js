import React, { Component } from 'react';
import Header from './components/Header'
import BookList from './components/BookList'
import BookCart from './components/BookCart'
import './App.css';

class App extends Component {

  state = {
    books: [],
    booksInCart: [],
  }

  componentDidMount(){
    fetch('http://localhost:8082/api/books')
      .then(res => res.json())
      .then(books => this.setState({books}))
  }

  handleAddClick = (book) => {
    this.setState({
      booksInCart: [...this.state.booksInCart, book]
    })
  }

  handleRemoveClick = (book) => {
    this.setState({
      booksInCart: [...this.state.booksInCart.filter(item => item.id !== book.id)]
    })
  }

  render() {
    return (
      <div className="App">
          <div className="container">
            <header>
              <Header />
            </header>
            <main className="flex">

              <div id="main">
                <BookList search={this.state.search} books={this.state.books} onClick={this.handleAddClick}/>
              </div>

              <div id="aside">
                <BookCart cartItems={this.state.booksInCart} onClick={this.handleRemoveClick}/>
              </div>

            </main>
          </div>
      </div>
    )
  }
}

export default App;
