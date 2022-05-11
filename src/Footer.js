import React, { Component } from 'react'

class Footer extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <footer className = "footer bg-dark" >
                    <div style={{height:150}}>
                        <div><span className="text-muted">All Rights Reserved 2022 @PtitGroup06</span></div>
                        <div><span className="text-muted">BOOKSTORE</span></div>
                        <div> <span className="text-muted">Địa chỉ: Km10, Đường Nguyễn Trãi, Q.Hà Đông, Hà Nội</span></div>
                        <div><span className="text-muted">Liên hệ:0123456789</span></div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer