import './App.css';
import background1 from './img/fondo1.png';
import background2 from './img/fondo2.png';
import { Footer } from './components/Footer';

// import './components/fonts/adicup-q-2022-tft';

const App = () => {
	return (
		<div className="principal">
			<h1>Memotest Scaloneta</h1>
			<div className="central">
				<div>
					<img src={background1} alt="Messi Background" />
				</div>
				<Tarjeta
					memoBlocks={shuffledMemoBlocks}
					animating={animating}
					handleMemoClick={handleMemoClick}
				/>
				<div>
					<img src={background2} alt="Scaloni Background" />
				</div>{' '}
			</div>
			<button onClick={resetMemoBlocks}>Reiniciar</button>
			<Footer />
		</div>
	);
};

export default App;
