import "./App.css";
import BandColaborate from "./components/BandColaborate";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeaderContent from "./components/HeaderContent";
import MainContent from "./components/MainContent";
import Payment from "./components/Payment";
import Service from "./components/Service";

function App() {
	return (
		<div className="App">
			<Header />
			<HeaderContent />
			<MainContent />
			<Payment />
			<BandColaborate />
			<Service />
			<Footer />
		</div>
	);
}

export default App;
