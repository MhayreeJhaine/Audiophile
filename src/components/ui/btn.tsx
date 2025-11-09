import { Link } from "react-router-dom";
import type { To } from "react-router-dom";

type LinkBtnProps = {
  to: To;
  label?: string;
  className?: string;
};

const LinkBtn = ({ to, label, className = "" }: LinkBtnProps) => {
  return (
    <Link
      to={to}
      className={`mt-10 px-8 py-4 uppercase text-sm font-medium 
        tracking-[1px] cursor-pointer transition-colors duration-300 ${className}`}
    >
      {label}
    </Link>
  );
};

export default LinkBtn;
