import './menu.scss';

const Menu = ({ menuOpen, setMenuOpen }) => {
	return (
		<div className={'menu ' + (menuOpen && 'active')}>
			<ul>
				<li onClick={() => setMenuOpen(false)}>
					<a href="#intro">Home</a>
				</li>
				<li onClick={() => setMenuOpen(false)}>
					<a href="#services">Services</a>
				</li>
				<li onClick={() => setMenuOpen(false)}>
					<a href="#portfolio">Portfolio</a>
				</li>
				<li onClick={() => setMenuOpen(false)}>
					<a href="#pricing">Pricing</a>
				</li>
				<li onClick={() => setMenuOpen(false)}>
					<a href="#testimonials">Testimonials</a>
				</li>
				<li onClick={() => setMenuOpen(false)}>
					<a href="#faq">FAQ</a>
				</li>
				<li onClick={() => setMenuOpen(false)}>
					<a href="#about">About</a>
				</li>
				<li onClick={() => setMenuOpen(false)}>
					<a href="#contact">Contact</a>
				</li>
			</ul>
		</div>
	);
};

export default Menu;
