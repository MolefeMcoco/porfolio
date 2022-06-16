import './portfolioList.scss';

const PortfolioList = ({ img, link, name }) => {
	return (
		<div className="p">
			<div className="p-browser">
				<div className="p-circle" />
				<div className="p-circle" />
				<div className="p-circle" />
			</div>
			<a href={link} target="_blank" rel="noreferrer">
				<img src={img} alt="" className="p-img" />
				<p className="p-name">{name}</p>
			</a>
		</div>
	);
};

export default PortfolioList;
