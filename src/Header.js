import React, { Component } from 'react'
// class Header extends Component {
//   render() {
//     return (
//       <header className="masthead bg-primary text-white text-center">
//         <nav class="navbar navbar-expand-lg navbar-light bg-dark">
//           <div class="collapse navbar-collapse" id="navbarNavDropdown">
//             <ul class="navbar-nav">
//               <li class="nav-item active">
//                 <a class="nav-link text-white" href="/author">
//                   Author <span class="sr-only">(current)</span>
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link text-white" href="#">
//                   Book
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </nav>
//       </header>
//     );
//   }
// }

class Header extends Component {
    render() {
        return (
            <header className="masthead bg-primary text-black text-center">
                <div className="container d-flex align-items-center flex-column">
                    <h2 className="masthead-heading text-uppercase mb-0">TRANG QUẢN LÝ CỬA HÀNG SÁCH</h2>
                </div>
            </header>
        );
    }
}
export default Header;
