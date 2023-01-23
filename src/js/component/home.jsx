import React from "react";
import { Navbar } from "./navbar.jsx"
import { Jumbotron } from "./jumbotron.jsx"
import { Card } from "./cardone.jsx"
import { Footer } from "./footer.jsx"

//include images into your bundle


//create your first component
const Home = () => {
	let text1 = " What an amazing oppurtunity, I'm just here loving the grind and I hope to retain all the information i can."
	let text2 = "I'm all into creating and adding new skills to me resume, big congradulations to me I can finally add FullStack engineer to my list!>"
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="d-flex">
					<Card description={text1} />
					<Card description={text2} />
					<Card description={text1} />
					<Card description={text2} />
				</div>
			</div>
			<Footer />
		</div>

	);
};

export default Home;