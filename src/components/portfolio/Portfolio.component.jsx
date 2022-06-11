import './portfolio.styles.scss';

const Portfolio = () => {
	return (
		<div className="portfolio" id="portfolio">
			<h1>Portfolio</h1>
			<ul>
				<li>All</li>
				<li>Custom</li>
				<li>Wordpress</li>
			</ul>
			<div className="container">
				<img src="https://mmwebdesign.co.za/assets/images/1.jpg" alt="" />
				<h3>Brain Space</h3>
			</div>
		</div>
	);
};

export default Portfolio;
