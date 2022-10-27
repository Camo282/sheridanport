//Needs to include Name and pull in Navigation component
import React from "react";
import Navbar from "./Nav";

function Header(props) {
	const { currentTab, setCurrentTab } = props;

	return (
		<header>
			<div>
				<h2>John Sheridan's React Portfolio</h2>
			</div>
			<div>
				<Navbar
					currentTab={currentTab}
					setCurrentTab={setCurrentTab}
				></Navbar>
			</div>
		</header>
	);
}

export default Header;

// import React, { useState } from 'react';
// import Navigation from "../Navigation/Navbar";

// function Header() {
    
//     return (
//         <header>
//             <div>
//                 <h2>John Sheridan's React Portfolio</h2>
//             </div>
//         </header>
//     );


// }

// export default Header;