import Contact from './components/contact/Contact.component';
import Intro from './components/intro/Intro.component';
import Portfolio from './components/portfolio/Portfolio.component';
import Testimonials from './components/testimonials/Testimonials.component';
import Topbar from './components/topbar/Topbar.component';
import Work from './components/work/Work.component';
import Menu from './components/menu/Menu.component';
import { useState } from 'react';

import './app.scss';
function App() {
	const [ menuOpen, setMenuOpen ] = useState(true);
	return (
		<div className="app">
			<Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<div className="sections">
				<Intro />
				<Portfolio />
				<Work />
				<Testimonials />
				<Contact />
			</div>
		</div>
	);
}

export default App;
