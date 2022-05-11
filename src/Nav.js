import React, { Component } from 'react'

class Nav extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div style={{height:100 }}>
            <nav className="navbar navbar-expand-lg bg-dark fixed-top"id="mainNav">
                    <nav className="navbar navbar-expand-md navbar-dark ">
                    <span><a href="/" className="navbar-brand">Bookstore</a></span>
                    <span><a href="/" className="navbar-brand">Home</a></span>
                    <span><a href="/book" className="navbar-brand">Book</a></span>
                    <span><a href="/author" className="navbar-brand">Author</a></span>
                    </nav>
                </nav>
            </div>
        )
    }
}

export default Nav