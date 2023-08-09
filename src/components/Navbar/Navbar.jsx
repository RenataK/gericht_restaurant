import React, { useState } from 'react';

//import icons
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

//import imgs
import images from '../../constants/images';

//import css
import './Navbar.css';

//import Booktable comp
import Booktable from '../BookTable/Booktable';

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const [showBookTable, setShowBookTable] = useState(false);

	const handleBookTableClick = () => {
    setShowBookTable(true);
  };

  const handleBookTableClose = () => {
    setShowBookTable(false);
  };

	return (
		<nav className='app__navbar'>
			<div className='app__navbar-logo'>
				<img src={images.gericht} alt='logo' />
			</div>
			<ul className='app__navbar-links'>
				<li className='p__opensans'><a href='#home'>Home</a></li>
				<li className='p__opensans'><a href='#about'>About</a></li>
				<li className='p__opensans'><a href='#menu'>Menu</a></li>
				<li className='p__opensans'><a href='#awards'>Awards</a></li>
				<li className='p__opensans'><a href='#contact'>Contact</a></li>
			</ul>
			<div className='app__navbar-login'>
				<a href='#newsletter' className='p__opensans'>Newsletter</a>
				<div />
				<button className='p__opensans' onClick={handleBookTableClick}>Book Table</button>
			</div>
			<div className='app__navbar-smallscreen'>
				<GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />
				
				{/* Only show IF toggle menu is set to true */}
				{toggleMenu && (
					<div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
						<MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
						<ul className='app__navbar-smallscreen-links' onClick={() => setToggleMenu(false)}>
							<li className='p__opensans'><a href='#home'>Home</a></li>
							<li className='p__opensans'><a href='#about'>About</a></li>
							<li className='p__opensans'><a href='#menu'>Menu</a></li>
							<li className='p__opensans'><a href='#awards'>Awards</a></li>
							<li className='p__opensans'><a href='#contact'>Contact</a></li>
							<li className='p__opensans' onClick={handleBookTableClick}><a href='#table'>Book Table</a></li>
						</ul>
					</div>
				)}

			</div>
			{showBookTable && <Booktable onClose={handleBookTableClose} />}
		</nav>
	);
};

export default Navbar;

