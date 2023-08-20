import Button from './common/Button';
import Logo from './common/Logo';

const Footer = () => {
  return (
    <footer className='bg-purple'>
      <div className='container flex justify-between items-center py-7'>
        <Logo mode='light' />
        <Button
          text='Get Started'
          color='bg-gradient-purple hover:bg-gradient-purple-hover'
          url='/'
        />
      </div>
    </footer>
  );
};

export default Footer;
