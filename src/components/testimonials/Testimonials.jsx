import './testimonials.scss';
import { data } from './data';
const Testimonials = () => {
	return (
		<div className="testimonials" id="testimonials">
			<h1>Testimonials</h1>
			<div className="container">
				{data.map((d) => (
					<div className={d.featured ? 'card featured' : 'card'}>
						<div className="image">
							<img src={d.img} alt="" />
						</div>
						<div className="top">
							<h3>{d.name}</h3>
							<h4>{d.title}</h4>
						</div>
						<div className="bottom">{d.desc}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Testimonials;
