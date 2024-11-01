import Navigation from "./components/Navigation";
import LearnChinese from "./components/LearnChinese";
import Header from "./components/Header";

const Home = () => {
	return <div style={{background: '#FFF', height: '100vh'}}>
		<Navigation />
		<Header />
		<LearnChinese />
	</div>
}

export default Home;