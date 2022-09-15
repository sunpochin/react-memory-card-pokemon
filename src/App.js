import './styles/App.css';
import CardHolder from './components/CardHolder';
import Header from './components/Header'
import Instruct from './components/Instruct';
import Footer from './components/Footer';
const App = () => {
	return (
		<div className='App'>
			<Header />
			<Instruct />
			<CardHolder />
			<Footer />
		</div>
	);
}

export default App;
