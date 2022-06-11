import './portfolio.styles.scss';

const Portfolio = () => {
	return (
		<div className="portfolio" id="portfolio">
			<h1>Portfolio</h1>
			<ul>
				<li className="active">All</li>
				<li>Custom</li>
				<li>Wordpress</li>
			</ul>
			<div className="container">
				<div className="item">
					<img src="https://mmwebdesign.co.za/assets/images/screen.jpg" alt="" />
					<h3>Brain Space</h3>
				</div>
				<div className="item">
					<img src="https://mmwebdesign.co.za/assets/images/1.jpg" alt="" />
					<h3>Brain Space</h3>
				</div>
				<div className="item">
					<img src="https://mmwebdesign.co.za/assets/images/1.jpg" alt="" />
					<h3>Brain Space</h3>
				</div>
				<div className="item">
					<img src="https://mmwebdesign.co.za/assets/images/1.jpg" alt="" />
					<h3>Brain Space</h3>
				</div>
				<div className="item">
					<img src="https://mmwebdesign.co.za/assets/images/1.jpg" alt="" />
					<h3>Brain Space</h3>
				</div>
				<div className="item">
					<img src="https://mmwebdesign.co.za/assets/images/1.jpg" alt="" />
					<h3>Brain Space</h3>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
