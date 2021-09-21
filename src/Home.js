import React, { Component } from 'react';
import BookShelf from './BookShelf';
import Header from './Header';
import { Link } from 'react-router-dom'

class Home extends Component {

    render() {
        const { books, updateShelf } = this.props
        return (
            <div>
                <Header />
                <div className="list-books-content">
                    <BookShelf title="currentlyReading"
                        updateShelf={updateShelf}
                        books={books} />
                    <BookShelf
                        title="wantToRead"
                        updateShelf={updateShelf}
                        books={books} />
                    <BookShelf
                        title="read"
                        updateShelf={updateShelf}
                        books={books}
                    />
                </div>
                <div className="open-search">
                    <Link to="/search">
                        <button>Add a book</button>
                    </Link>
                </div>


            </div>

        )
    }
}

export default Home;