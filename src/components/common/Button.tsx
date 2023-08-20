import { Link } from 'react-router-dom';

type ButtonProps = {
  text: string;
  color: string;
  url: string;
};

const Button = ({ text, color, url }: ButtonProps) => {
  return (
    <Link
      to={url}
      className={`flex text-center font-bold text-white text-base lg:text-lg px-7 py-4 rounded-[28px] transition-all ${color}`}
    >
      {text}
    </Link>
  );
};

export default Button;
