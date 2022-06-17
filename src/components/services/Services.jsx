import React from 'react';
import './services.scss';
import code from '../../assets/code-solid.svg';
import wordpress from '../../assets/wordpress-brands.svg';
import mobile from '../../assets/mobile-button-solid.svg';
import tools from '../../assets/screwdriver-wrench-solid.svg';

const Services = () => {
	return (
		<div className="services" id="services">
			<div className="left">
				<div className="left-container">
					<h3>What i do</h3>
					<h1>Web Design</h1>
					<p>
						Easy to navigate professionally websites that represents your brand , showcases products or
						services and encourage customers to make a purchase.
					</p>
					<a href="#portfolio">
						<button>Projects</button>
					</a>
				</div>
			</div>
			<div className="right">
				<div className="right-container">
					<div className="item">
						<img src={code} alt="" className="icon" />
						<h3>Custom Coded</h3>
						<p>
							Unique custom coded websites which are SEO friendly, faster , secure and full customizable.
						</p>
					</div>
					<div className="item">
						<div className="icon-container">
							<img src={wordpress} alt="" className="icon" />
						</div>
						<h3>Wordpress </h3>
						<p>
							Theme based websites that take shorter time to build, and are cheaper to build with a huge
							library.
						</p>
					</div>
					<div className="item">
						<div className="icon-container">
							<img src={mobile} alt="" className="icon" />
						</div>
						<h3>Mobile friendly</h3>
						<p>Responsive websites that are accessible across all devices with web and Internet access.</p>
					</div>
					<div className="item">
						<div className="icon-container">
							<img src={tools} alt="" className="icon" />
						</div>
						<h3>Website Maintenance </h3>
						<p>
							Regularly checking website for issues, mistakes and keeping it updated with the relevant and
							required changes.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
