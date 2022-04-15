
import './index.scss';

import Logo from '../../assets/images/logo.svg';

const Navbar = () => {
  return (
    <div className='navbar container'>
      <div className="logo">
        <img src={Logo} alt="SDG Logo" />
        </div>
    </div>
  );
};

export default Navbar;
