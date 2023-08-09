import React, { useState } from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubscribe = () => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (emailRegex.test(email)) {
      setSubscribed(true);
    } else {
      alert('Please Enter a Valid Email')
    }
  };

  return (
    <div className='app__newsletter' id="newsletter">
      {subscribed ? (
        <div className='app__newsletter-thankyou flex__center'>
          <SubHeading title="Thank you for subscribing!" />
        </div>
      ) : (
        <>
          <div className='app__newsletter-heading'>
            <SubHeading title="Newsletter" />
            <h1 className='headtext__cormorant'>Subscribe To Our Newsletter</h1>
            <p className='p__opensans'>And never miss latest Updates!</p>
          </div>
          <div className='app__newsletter-input flex__center'>
            <input type='email' placeholder='Enter your e-mail address' value={email} onChange={handleEmailChange} required />
            <button className='custom__button' onClick={handleSubscribe}>Subscribe</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Newsletter;
