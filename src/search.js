import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
class Search extends Component {
    state = {
        query: ""
    }

    updateQuery = async (e) => {
        // e.preventDefault()
        const queryStr = e.target.value
        await this.setState(() => ({
            query: queryStr
        }))
        await this.props.search(queryStr)
    }






    render() {
        const { books } = this.props;
        const { query } = this.state
        const { updateShelf } = this.props



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
                            (books.length > 0 && query.length > 0) && books.map(book => (

                                <li key={book.id} >
                                    <Book
                                        title={book.title}
                                        authors={book.authors}
                                        book={book}
                                        key={book.id}
                                        imageLinks={book.imageLinks}
                                        updateShelf={updateShelf}
                                        shelf={book.shelf}

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