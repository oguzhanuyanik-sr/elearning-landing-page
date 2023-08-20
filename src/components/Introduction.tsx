import Button from './common/Button';
import { heroImages } from '../utils/constants';

const Introduction = () => {
  return (
    <section className='container mt-9 md:flex md:relative'>
      <div className='md:w-1/2 md:pt-20'>
        <h1 className='font-extrabold text-purple text-[40px] leading-[51px] lg:text-[56px] lg:leading-[70px]'>
          Maximize skill,
          <br /> minimize budget
        </h1>
        <p className='text-light-gray font-medium text-base leading-[26px] mt-[26px] lg:font-medium lg:text-[18px] lg:leading-[28px]'>
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </p>
        <div className='inline-block mt-9 mb-11'>
          <Button
            text='Get Started'
            color='bg-gradient-pink hover:bg-gradient-pink-hover'
            url='/'
          />
        </div>
      </div>
      <div className='w-full flex justify-center md:absolute md:right-[-350px] md:top-[-150px] -z-10 lg:right-[-390px] lg:top-[-200px] xl:right-[-600px]'>
        {heroImages.map(({ img, styles }, index) => (
          <img key={index} className={styles} src={img} alt='Hero' />
        ))}
      </div>
    </section>
  );
};

export default Introduction;
