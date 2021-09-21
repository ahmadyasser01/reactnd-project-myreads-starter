import React, { Component } from "react";
import Book from "./Book";

class BookShelf extends Component {

    render() {
        const { books, updateShelf } = this.props
        console.log(books);
        const filtredBooks = books.filter(book => (book.shelf === this.props.title))
        return (
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{this.props.title}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {
                                filtredBooks.map(book => (
                                    <li key={book.id}>
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
            </div>
        )
    }

}

export default BookShelf