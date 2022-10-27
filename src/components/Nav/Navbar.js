// CLICKABLE Navigation Titles to take you to Sections
// About Me (DEFAULT SHOWN)
// Portfolio
// Contact Me
// Resume
// Navigation Title must highlight when you're on the page.

import React, { Component } from "react";

import { MenuItems } from './MenuItems';
import './Navbar.css';
import { Button } from '../Button';

class Navbar extends Component {
  state = { clicked: false }

  handleClick = () =>{
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return(
      <nav className="NavbarItems">
        <h1 className="navbar-logo">React<i className="fab fa-react"></i></h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            )
          })}          
        </ul>
        {/* <Button></Button> */}
      </nav>
    )
  }
}




export default Navbar;

// function Navigation(props) {
//   const tabs = ["About", "Portfolio", "Contact", "Resume"];
//   return (
//     <div className="tabs is-centered">
//       <ul className="nav nav-tabs">
//         {tabs.map((tab) => (
//           <li
//             className={
//               props.currentPage === tab ? "nav-item is-active" : "nav-item"
//             }
//             key={tab}
//           >
//             <a
//               href={"#" + tab.toLowerCase()}
//               // Whenever a tab is clicked on,
//               // the current page is set through the handlePageChange props.
//               onClick={() => props.handlePageChange(tab)}
//               className={
//                 props.currentPage === tab ? "nav-link active" : "nav-link"
//               }
//             >
//               {tab}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }