import React, { Component } from 'react'

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <header>
                <div style={{height:100}}>
                    <span className="text-center font-weight-bold text-uppercase">QUẢN LÝ CỬA HÀNG SÁCH</span>
                </div>
            </header>
        )
    }
}

export default Header