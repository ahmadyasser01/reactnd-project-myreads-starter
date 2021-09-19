import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Link, Route } from 'react-router-dom'
import Home from './Home'
import Search from './search'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [

    ]

  }
  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState(() => ({ books })))
  }
  updateShelf = async (book, shelf) => {
    console.log("before change,", book)
    if (book[shelf] !== shelf) {
      await BooksAPI.update(book, shelf)
      console.log(`ss`, book);
      book.shelf = shelf;
      console.log(book.shelf);
      this.setState(prev => ({
        books: prev.books.filter(b => b.id !== book.id)
          .concat([book])
      }
      )

      )
    }

  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (<Home books={this.state.books} updateShelf={this.updateShelf}></Home>)} />
        <Route path="/search" render={() => (<Search books={this.state.books} updateShelf={this.updateShelf}></Search>)} />
        <div className="open-search">
          <Link to="/search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default BooksApp
// {this.state.showSearchPage ? (
//   <div className="search-books">
//     <div className="search-books-bar">
//       <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
//       <div className="search-books-input-wrapper">
//         {/*
//           NOTES: The search from BooksAPI is limited to a particular set of search terms.
//           You can find these search terms here:
//           https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

//           However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
//           you don't find a specific author or title. Every search is limited by search terms.
//         */}
//         <input type="text" placeholder="Search by title or author" />

//       </div>
//     </div>
//     <div className="search-books-results">
//       <ol className="books-grid"></ol>
//     </div>
//   </div>
// ) : (
//   <div className="list-books">
//     <Header />
//     <div className="list-books-content">
//       <BookShelf title="Currently Reading" />
//       <BookShelf title="Want to Read" />
//       <BookShelf title="Read" />
//     </div>
//     <div className="open-search">
//       <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
//     </div>
//   </div>
// )}