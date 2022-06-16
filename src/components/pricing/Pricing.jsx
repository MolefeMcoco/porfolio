import React from 'react';
import './pricing.scss';

const Pricing = () => {
	return (
		<div className="pricing" id="pricing">
			<h1>PRICING</h1>
			<div className="container">
				<div className="left">
					<h2 className="title">Wordpress</h2>
					<div className="item">
						<div className="item-title">
							<h3>Landing Page</h3>
							<p>R1600</p>
						</div>
						<ul>
							<li>1 page </li>
							<li>5 screen folds</li>
							<li>5 email accounts </li>
							<li>8 Gallary photos</li>
							<li>social media integration</li>
						</ul>
					</div>
					<div className="item">
						<div className="item-title">
							<h3>Business website</h3>
							<p>2500</p>
						</div>
						<ul>
							<li>5 pages</li>
							<li>10 email accounts </li>
							<li>Google map integration </li>
							<li>social media integration</li>
						</ul>
					</div>
					<div className="item">
						<div className="item-title">
							<h3>E-commerce website </h3>
							<p>R3500</p>
						</div>
						<ul>
							<li>50 products (5 preloaded)</li>
							<li>10 email accounts </li>
							<li>Google map integration </li>
							<li>social media integration</li>
							<li>Payment integration </li>
							<li>Website edit products training</li>
						</ul>
					</div>
				</div>
				<div className="right">
					<h2 className="title">Custom Design</h2>
					<div className="item">
						<div className="item-title">
							<h3>Landing Page</h3>
							<p>R 1500</p>
						</div>
						<ul>
							<li>1 page </li>
							<li>5 screen folds</li>
							<li>5 email accounts </li>
							<li>8 Gallary photos</li>
							<li>social media integration</li>
						</ul>
					</div>
					<div className="item">
						<div className="item-title">
							<h3>Business Website</h3>
							<p>R3500</p>
						</div>
						<ul>
							<li>5 pages</li>
							<li>10 email accounts </li>
							<li>Google map integration </li>
							<li>social media integration</li>
						</ul>
					</div>
					<div className="item">
						<div className="item-title">
							<h3>Wordpress Business website</h3>
							<p>R 1500</p>
						</div>
						<ul>
							<li>item1</li>
							<li>item1</li>
							<li>item1</li>
							<li>item1</li>
							<li>item1</li>
							<li>item1</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="notice">* all prices incude 1 year hosting and .co.za domain name</div>
		</div>
	);
};

export default Pricing;
