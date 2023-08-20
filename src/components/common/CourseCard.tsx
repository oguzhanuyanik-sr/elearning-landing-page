import { Link } from 'react-router-dom';

const CourseCard = ({ img, title, desc, url }) => {
  return (
    <div className='px-7 shadow-card rounded-[10px] mt-10 py-10 bg-white md:w-[45%] md:max-h-[260px] lg:w-[30%] lg:md:max-h-[280px] lg:flex lg:flex-col lg:justify-between'>
      <div className='relative'>
        <img className='mb-6 absolute top-[-65px]' src={img} alt={title} />
      </div>
      <h3 className='font-extrabold text-xl mb-4 lg:text-2xl lg:leading-7'>
        {title}
      </h3>
      <p className='text-light-gray font-medium text-base lg:text-lg leading-[26px] lg:leading-7 mb-6'>
        {desc}
      </p>
      <Link
        className='text-dark-pink font-bold text-lg leading-7 hover:text-light-pink transition-all'
        to={url}
      >
        Get Started
      </Link>
    </div>
  );
};

export default CourseCard;
