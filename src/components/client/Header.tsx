import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-full md:px-32 sm:px-8 px-8">
        <div className="flex items-center  justify-between py-4 md:justify-start">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to={`/`}>
              <span className="sr-only">Your Company</span>
              <img
                className="h-12 sm:text-left	"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </Link>
          </div>
          <div className="items-center justify-end md:flex md:flex-1">
            <Link to={`/`}
              className="hidden md:block px-5 py-2 text-base font-medium text-gray-800 hover:text-blue-500"
            >
              Home
            </Link>
            <Link to={`/suctre70`}
              className=" md:border-solid border-2 rounded-lg px-5 py-2 text-base font-medium text-gray-800 hover:text-blue-500"
            >
              Sức trẻ 70
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
