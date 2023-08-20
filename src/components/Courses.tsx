import { courseData } from '../utils/constants';
import CourseCard from './common/CourseCard';

type Props = {};

const Courses = (props: Props) => {
  return (
    <section className='bg-gradient-gray md:mt-24 lg:mt-80 pb-20 lg:pb-36'>
      <div className='container md:flex md:flex-wrap md:justify-between'>
        <div className='shadow-card rounded-[10px] mt-10 md:w-[45%] md:max-h-[260px] lg:w-[30%]'>
          <h2 className='bg-gradient-pink font-extrabold text-2xl lg:text-[26px] lg:leading-10 text-white leading-8 py-8 md:pt-16 lg:pt-10 px-6 rounded-xl md:w-full md:h-full'>
            Check out our most popular courses!
          </h2>
        </div>
        {courseData.map(({ img, title, desc, url }) => (
          <CourseCard img={img} title={title} desc={desc} url={url} />
        ))}
      </div>
    </section>
  );
};

export default Courses;
