import { Link } from 'react-router-dom';

type ButtonProps = {
  text: string;
  color: string;
};

const Button = ({ text, color }: ButtonProps) => {
  return (
    <Link
      to='/'
      className={`flex text-center text-base lg:text-lg font-bold text-white rounded-[28px] transition-all px-7 py-4 ${color}`}
    >
      {text}
    </Link>
  );
};

export default Button;
