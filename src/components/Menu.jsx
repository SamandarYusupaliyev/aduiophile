import { Link } from "react-router-dom";

import headphonesLogo from "/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersLogo from "/assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesLogo from "/assets/shared/desktop/image-category-thumbnail-earphones.png";
import arrow from "/assets/shared/desktop/icon-arrow-right.svg";

function Menu() {
  return (
    <div className="bg-white max-container pb-[67px] md:pt-[108px] flex md:flex-row md:gap-[10px] justify-between lg:min-w-[730px]">
      <div className="relative bg-gray-light w-full flex flex-col items-center justify-end pb-[22px] h-[165px] rounded-lg">
        <img src={headphonesLogo} className="absolute top-[-60px] w-[160px]" />
        <div className="flex flex-col items-center justify-between">
          <p className="uppercase font-bold mb-[15px]">Headphones</p>
          <Link
            to="/headphones"
            className="flex items-center gap-[13px] cursor-pointer hover:text-cream"
          >
            <p className="text-[13px] font-bold opacity-50 uppercase">Shop</p>
            <img src={arrow} />
          </Link>
        </div>
      </div>
      <div className="relative bg-gray-light w-full flex flex-col items-center justify-end pb-[22px] h-[165px] rounded-lg">
        <img src={speakersLogo} className="absolute top-[-60px] w-[160px]" />
        <div className="flex flex-col items-center justify-between">
          <p className="uppercase font-bold mb-[15px]">Speakers</p>
          <Link
            to="/speakers"
            className="flex items-center gap-[13px] cursor-pointer hover:text-cream"
          >
            <p className="text-[13px] font-bold opacity-50 uppercase">Shop</p>
            <img src={arrow} />
          </Link>
        </div>
      </div>
      <div className="relative bg-gray-light w-full flex flex-col items-center justify-end pb-[22px] h-[165px] rounded-[8px]">
        <img src={earphonesLogo} className="absolute top-[-50px] w-[160px]" />
        <div className="flex flex-col items-center justify-between">
          <p className="uppercase font-bold mb-[15px]">Earphones</p>
          <Link
            to="/earphones"
            className="flex items-center gap-[13px] cursor-pointer hover:text-cream"
          >
            <p className="text-[13px] font-bold opacity-50 uppercase">Shop</p>
            <img src={arrow} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Menu;