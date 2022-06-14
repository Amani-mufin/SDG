import './index.scss';
import Mobile1 from '../../assets/images/mobile1.svg';
import Mobile2 from '../../assets/images/mobile2.svg';

const Newsletter = () => {
  return (
    <div className='container-newletter'>
      <div className="container">

      <div className='left'>
        <p className='heading'>Join the community</p>
        <p className='text'>
          Stay upto date with all the happening around SDG community.
        </p>
        {/* <form className='form'>
          <input
            type='email'
            name='email'
            placeholder='Please enter your email address'
          />
          <button type='submit'>Notify Me</button>
        </form> */}
        <a href='https://gdg.community.dev/gdg-ajah/' className='mt-5 mb-2' target="_blank" rel="noreferrer">
          <button type='submit'>Join now</button>
          </a>
      </div>
      <div className='right'>
        <div className='mobile1'>
          {' '}
          <img src={Mobile1} alt='mobile' />
        </div>
        <img src={Mobile2} alt='mobile' className='mobile2 m-3 mb-0 mt-5'  />
      </div>
      </div>
    </div>
  );
};

export default Newsletter;
