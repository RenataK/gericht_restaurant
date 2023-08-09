import React, { useState } from 'react';

import './AboutUs.css';
import { images } from '../../constants';

const AboutUs = () => {
  const [showAboutUsButton, setShowAboutUsButton] = useState(true);
  const [showOurHistoryButton, setShowOurHistoryButton] = useState(true);

  const handleAboutUsButtonClick = () => {
    setShowAboutUsButton(false);
    const aboutUsContent = document.querySelector('.app__aboutus-content_about');
    const aboutUsParagraph = aboutUsContent.querySelector('.p__opensans');
    aboutUsContent.appendChild(aboutUsParagraph.cloneNode(true));
  };

  const handleOurHistoryButtonClick = () => {
    setShowOurHistoryButton(false);
    const historyContent = document.querySelector('.app__aboutus-content_history');
    const historyParagraph = historyContent.querySelector('.p__opensans');
    historyContent.appendChild(historyParagraph.cloneNode(true));
  };

  return (
    <div className='app__aboutus app__bg flex__center section__padding' id='about'>
      <div className='app__aboutus-overlay flex__center'>
        <img src={images.G} alt='g letter' />
      </div>
      <div className='app__aboutus-content flex__center'>
        <div className='app__aboutus-content_about'>
          <h1 className='headtext__cormorant'>About Us</h1>
          <img src={images.spoon} alt='about_spoon' className='spoon__img' />
          <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
          {showAboutUsButton && (
            <button type='button' className='custom__button' onClick={handleAboutUsButtonClick}>
              Know More
            </button>
          )}
        </div>

        <div className='app__aboutus-content_knife flex__center'>
          <img src={images.knife} alt='knife' />
        </div>

        <div className='app__aboutus-content_history'>
          <h1 className='headtext__cormorant'>Our History</h1>
          <img src={images.spoon} alt='history_spoon' className='spoon__img' />
          <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
          {showOurHistoryButton && (
            <button type='button' className='custom__button' onClick={handleOurHistoryButtonClick}>
              Know More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
