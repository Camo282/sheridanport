// // CLICKABLE Navigation Titles to take you to Sections
// // About Me (DEFAULT SHOWN)
// // Portfolio
// // Contact Me
// // Resume
// // Navigation Title must highlight when you're on the page.


import React from "react";

function Navbar(props) {
	const { currentTab, setCurrentTab } = props;

	return (
		<nav>
			<ul className="flex-row mobile-view">
				<li className={currentTab === "about" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("about")}>About Me</span>
				</li>
				<li className={currentTab === "portfolio" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("portfolio")}>Portfolio</span>
				</li>
				<li className={currentTab === "contact" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("contact")}>Contact</span>
				</li>
				<li className={currentTab === "resume" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("resume")}>Resume</span>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;

// import React, { Component } from "react";

// import { MenuItems } from './MenuItems';
// import './Navbar.css';
// import { Button } from '../Button';

// class Navbar extends Component {
//   state = { clicked: false }

//   handleClick = () =>{
//     this.setState({ clicked: !this.state.clicked })
//   }

//   render() {
//     return(
//       <nav className="NavbarItems">
//         <h1 className="navbar-logo">React<i className="fab fa-react"></i></h1>
//         <div className="menu-icon" onClick={this.handleClick}>
//           <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
//         </div>
//         <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
//           {MenuItems.map((item, index) => {
//             return (
//               <li key={index}>
//                 <a className={item.cName} href={item.url}>
//                   {item.title}
//                 </a>
//               </li>
//             )
//           })}          
//         </ul>
//         {/* <Button></Button> */}
//       </nav>
//     )
//   }
// }




// export default Navbar;
