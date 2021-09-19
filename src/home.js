import React, { Component } from 'react';
import BookShelf from './BookShelf';
import Header from './Header';



class Home extends Component {

    render() {
        return (
            <div>
                <Header />
                <BookShelf title="want to read" />
                <BookShelf title="" />
                <BookShelf title="Read" />

            </div>

        )
    }
}

export default Home;