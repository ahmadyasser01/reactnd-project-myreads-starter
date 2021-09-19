import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from './BooksAPI'
import Book from "./Book";
class Search extends Component {
    state = {
        books: [],
        query: ""
    }

    updateQuery = (e) => {
        e.preventDefault()
        const queryStr = e.target.value
        this.setState(() => ({
            query: queryStr
        }))
        this.search(this.state.query)
    }
    clearQuery = () => {
        this.updateQuery('')
    }

    search = async (query) => {
        if (!!query) {
            const res = await BooksAPI.search(query);
            if (res) {
                this.setState(() => ({ books: res })
                )
            }
        }
    }

    render() {
        const { query, books } = this.state;
        const resBooks = (books.length >= 0 ? books.filter(book => (
            book.title.toLowerCase().includes(query.toLowerCase())
        )) : "")
        console.log(resBooks[0])
        return (
            <div>


                <div className="search-books">
                    <div className="search-books-bar">
                        <Link to="/">
                            <button className="close-search" >Close</button>
                        </Link>
                        <div className="search-books-input-wrapper">

                            <input type="text" placeholder="Search by title or author" value={query} onChange={this.updateQuery} />

                        </div>

                    </div>
                </div>


                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            resBooks.length > 0 && query.length > 0 && resBooks.map(book => (
                                <li>
                                    <Book
                                        title={book.title}
                                        authors={book.authors}
                                        book={book}
                                        key={book.id}
                                        imageLinks={book.imageLinks}

                                    />
                                </li>
                            ))
                        }



                    </ol>
                </div>
            </div>

        )

    }
}

export default Search