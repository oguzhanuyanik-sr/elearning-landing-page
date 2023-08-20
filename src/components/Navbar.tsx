import Button from './common/Button';
import Logo from './common/Logo';

const Navbar = () => {
  return (
    <header className='container flex justify-between items-center mt-3'>
      <Logo mode='dark' />
      <Button text='Get Started' color='bg-purple hover:bg-light-purple' />
    </header>
  );
};

export default Navbar;
