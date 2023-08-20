import { DarkLogo, LightLogo } from '../../utils/constants';
import { Link } from 'react-router-dom';

const Logo = ({ mode }: { mode: string }) => {
  return (
    <Link to='/'>
      <img src={mode === 'dark' ? DarkLogo : LightLogo} alt='Logo' />
    </Link>
  );
};

export default Logo;
