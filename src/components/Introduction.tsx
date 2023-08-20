import Button from './common/Button';
import { MobileHero, TabletHero, DesktopHero } from '../utils/constants';

const Introduction = () => {
  return (
    <section className='container mt-9 md:flex md:relative'>
      <div className='md:w-1/2 md:pt-20'>
        <h1 className='font-heading text-[40px] leading-[51px] lg:text-[56px] lg:leading-[70px]'>
          Maximize skill,
          <br /> minimize budget
        </h1>
        <p className='font-body font-medium text-base leading-[26px] mt-[26px] lg:font-medium lg:text-[18px] lg:leading-[28px]'>
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </p>
        <div className='mt-9 mb-11 inline-block'>
          <Button
            text='Get Started'
            color='bg-gradient-pink hover:bg-gradient-pink-hover'
          />
        </div>
      </div>
      <div className='w-full flex justify-center md:absolute md:right-[-350px] md:top-[-150px] -z-10 lg:right-[-390px] lg:top-[-200px] xl:right-[-600px]'>
        <img
          className='block md:hidden max-h-[301px] max-w-[327px]'
          src={MobileHero}
          alt='Hero'
        />
        <img
          className='hidden md:block lg:hidden max-h-[640px] max-w-[640px]'
          src={TabletHero}
          alt='Hero'
        />
        <img
          className='hidden lg:block max-h-[936px] max-w-[990px]'
          src={DesktopHero}
          alt='Hero'
        />
      </div>
    </section>
  );
};

export default Introduction;
