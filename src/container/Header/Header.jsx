import React from 'react';

import './Header.css';
import { images } from '../../constants';
import { SubHeading } from '../../components';

const Header = () => {

	const handleClick = () => {
	window.location.href = "#menu";
}

	return (
	<div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
			<SubHeading title='Chase The New Flavour' />
			<h1 className='app__header-h1'>The Key To Fine Dining</h1>
			<p className='p__opensans' style={{margin: '2rem 0'}}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus</p>
			<button type='button' className='custom__button' onClick={handleClick}>Explore Menu</button>
		</div>
		<div className='app__wrapper_img'>
				<img src={images.welcome} alt='header' />
			</div>
  </div>
	);
} 

export default Header;
