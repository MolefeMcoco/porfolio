import { useState } from 'react';
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Menu from './components/menu/Menu';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';
import Pricing from './components/pricing/Pricing';
import Faqs from './components/faq/faq';
import './app.scss';
function App() {
	const [ menuOpen, setMenuOpen ] = useState(false);
	return (
		<div className="app">
			<Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<div className="sections">
				<Intro />
				<Services />
				<Portfolio />
				<Pricing />
				<Testimonials />
				<Faqs />
				<About />
				<Contact />
			</div>
		</div>
	);
}

export default App;
