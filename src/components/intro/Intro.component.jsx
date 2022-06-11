import './intro.syles.scss';
import downArrow from '../../assets/down-arrow.png';

const Intro = () => {
	return (
		<div className="intro" id="intro">
			<div className="left">
				<div className="imageContainer" />
			</div>
			<div className="right">
				<div className="wrapper">
					<h2>Hi There, I'm </h2>
					<h1>Molefe Mcoco</h1>
					<h3>
						Freelance <span> Designer</span>
					</h3>
				</div>
				<a href="#portfolio">
					<img src={downArrow} alt="" />
				</a>
			</div>
		</div>
	);
};

export default Intro;
