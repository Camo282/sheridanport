import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "//components/About";
import Portfolio from "//components/Portfolio";
import Contact from "//components/Contact";
import Resume from "//components/Resume";
// import Navigation from '//components/Nav';

function App() {
	const [currentTab, setCurrentTab] = useState("about");

	// This function checks to see which tab is selected and then generates the appropriate tab.
	const renderTab = () => {
		switch (currentTab) {
			case "about":
				return <About />;
			case "portfolio":
				return <Portfolio />;
			case "contact":
				return <Contact />;
			case "resume":
				return <Resume />;
			default:
				return null;
		}
	};

	return (
		<div>
			<div className="mobile-header">
				<Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
			</div>
			<div>
				<main>{renderTab()}</main>
			</div>
			<div>
				<Footer></Footer>
			</div>
		</div>
	);
}

export default App;

// // 

// import React, { useState } from 'react';
// import Nav from './components/Nav';
// import About from './components/About';
// import Gallery from './components/Gallery';
// import ContactForm from './components/Contact';
// import Footer from './components/Footer';

// function App() {
//   const [categories] = useState([ 
//     {
//       name: 'commercial',
//       description: 'Photos of grocery stores, food trucks, and other commercial projects',
//     },
//     { name: 'portraits', description: 'Portraits of people in my life' },
//     { name: 'food', description: 'Delicious delicacies' },
//     { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
//   ]);

//   const [currentCategory, setCurrentCategory] = useState(categories[0]);

//   const [contactSelected, setContactSelected] = useState(false);

//   return (
//     <div>
//       <Nav
//         categories={categories}
//         setCurrentCategory={setCurrentCategory}
//         currentCategory={currentCategory}
//         contactSelected={contactSelected}
//         setContactSelected={setContactSelected}
//       ></Nav>
//       <main>
//         {!contactSelected ? (
//           <>
//             <Gallery currentCategory={currentCategory}></Gallery>
//             <About></About>
//           </>
//         ) : (
//             <ContactForm></ContactForm>
//           )}
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;
