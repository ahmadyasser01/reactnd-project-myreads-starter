import React, { Component } from "react";


class Book extends Component {

    changeShelf = async (e) => {
        e.preventDefault();
        await this.props.updateShelf(this.props.book, e.target.value)
        //   await this.props.updateShelfSearch(this.props.book, e.target.value)


    }

    render() {
        const { title, authors, imageLinks, shelf } = this.props;
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128, height: 193, backgroundImage:
                            `url(${imageLinks ? imageLinks.thumbnail : ""})`
                    }}></div>
                    <div className="book-shelf-changer">
                        <select
                            value={shelf === undefined ? "none" : shelf}
                            onChange={this.changeShelf}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors ? authors : ""}</div>
            </div>

        )
    }
}
export default Book