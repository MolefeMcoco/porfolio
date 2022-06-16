import './portfolio.scss';
import PortfolioList from '../portfolioList/PortfolioList';
import { portfolioData } from '../data';

const Portfolio = () => {
	console.log(portfolioData.name);
	return (
		<div className="pl" id="portfolio">
			<div className="pl-texts">
				<h1 className="pl-title">Portfolio</h1>
			</div>
			<div className="pl-list">
				{portfolioData.map((item) => (
					<PortfolioList key={item.id} img={item.img} link={item.link} name={item.name} />
				))}
			</div>
		</div>
	);
};

export default Portfolio;
