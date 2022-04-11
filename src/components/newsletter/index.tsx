import React from 'react';
import './index.scss';
import Mobile1 from '../../assets/images/mobile1.svg';
import Mobile2 from '../../assets/images/mobile2.svg';

const Newsletter = () => {
  return (
    <div className='container'>
      <div className='left'>
        <p className='heading'>Join the community</p>
        <p className='text'>
          Stay upto date with all the happening around SDG community and also
          get notified when the App is launched{' '}
        </p>
        <form className='form'>
          <input
            type='email'
            name='email'
            placeholder='Please enter your email address'
          />
          <button type='submit'>Notify Me</button>
        </form>
      </div>
      <div className='right'>
        <div className='mobile1'>
          {' '}
          <img src={Mobile1} alt='mobile' />
        </div>
        <img src={Mobile2} alt='mobile' className='mobile2' />
      </div>
    </div>
  );
};

export default Newsletter;
