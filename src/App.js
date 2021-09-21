import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import Home from './Home'
import Search from './search'

class BooksApp extends React.Component {
  state = {
    books: [],
    searchRes: []

  }
  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState(() => ({ books })))
  }
  updateShelf = async (book, shelf) => {
    if (book[shelf] !== shelf) {
      await BooksAPI.update(book, shelf)
      book.shelf = shelf;
      this.setState(prev => ({
        books: prev.books.filter(b => b.id !== book.id)
          .concat([book])
      }))
    }
  }
  search = async (query) => {
    if (query !== '') {
      const { books } = this.state;
      const res = await BooksAPI.search(query)
      if (res.error) {
        this.setState({ searchRes: [] })
      }
      else {
        res.filter(book => book.title.toLowerCase().includes(query.toLowerCase())) //filter the search result
        // to know if book on search page is really on a shelf or no and if it has a shelf assign a shelf to the searched books 
        res.map(sbook => {
          const bookHasShelf = books.find(book => book.id === sbook.id)
          sbook.shelf = bookHasShelf ? bookHasShelf.shelf : "none"
          return sbook
        })
      }
      this.setState({ searchRes: res })
    }
  }



  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (<Home books={this.state.books} updateShelf={this.updateShelf}></Home>)} />
        <Route path="/search" render={() => (<Search books={this.state.searchRes} updateShelf={this.updateShelf} search={this.search}></Search>)} />
      </div>
    )
  }
}

export default BooksApp
