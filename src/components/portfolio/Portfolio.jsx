import './portfolio.scss';
import PortfolioList from '../portfolioList/PortfolioList';
import { products } from '../../data';

const Portfolio = () => {
	return (
		<div className="pl" id="portfolio">
			<div className="pl-texts">
				<h1 className="pl-title">Portfolio</h1>
			</div>
			<div className="pl-list">
				{products.map((item) => <PortfolioList key={item.id} img={item.img} link={item.link} />)}
			</div>
		</div>
	);
};

export default Portfolio;
