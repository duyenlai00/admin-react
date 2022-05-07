import React, {Component} from 'react';

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"id="mainNav">
                <div className="container">
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item mx-0 mx-lg-1"><a
                                className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                href="/book">Book</a></li>
                            <li className="nav-item mx-0 mx-lg-1"><a
                                className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                href="/author">Author</a></li>
                            <li className="nav-item mx-0 mx-lg-1"><a
                                className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;