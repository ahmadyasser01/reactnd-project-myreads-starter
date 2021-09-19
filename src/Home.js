import React, { Component } from 'react';
import BookShelf from './BookShelf';
import Header from './Header';



class Home extends Component {

    render() {
        const { books, updateShelf } = this.props
        console.log(`books shelves in da home `, books)
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


            </div>

        )
    }
}

export default Home;