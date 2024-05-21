import { FooterElement, Menu } from "../components";
import { Link } from "react-router-dom";

import desktopZX9 from "/assets/home/desktop/image-speaker-zx9.png";
import desktopZX7 from "/assets/home/desktop/image-speaker-zx7.jpg";

function Landing() {
  return (
    <div>
      <header className="lg:bg-lg-hero-pattern bg-no-repeat bg-center bg-cover lg:px-[165px] w-full">
        <div className="max-container border-t-[1px] border-white/40 border-solid pt-[128px] pb-[158px] flex flex-col justify-center lg:items-start lg:text-left">
          <div className="w-[398px] h-[346px]">
            <p className="text-white opacity-50 font-normal uppercase tracking-[10px]">
              New Product
            </p>
            <h1 className="uppercase xs:tracking-[1.3px] md:text-[56px] text-white mt-6">
              XX99 Mark II Headphones
            </h1>
            <p className="mt-6 text-white/75 lg:px-0 lg:w-[360px] mb-[40px]">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link to="headphones/xx99-mark-two-headphones">
              <button className="uppercase rounded-none bg-cream border-none text-white w-[160px] py-4 hover:bg-cream-light">
                See Product
              </button>
            </Link>
          </div>
        </div>
      </header>
      <section>
        <Menu />
      </section>

      <section className="max-container h-full flex flex-col lg:gap-12 ">
        <div className="bg-cream bg-circles bg-no-repeat lg:bg-top flex lg:flex-row items-center justify-evenly lg:h-[560px] lg:py-0 lg:min-w-[730px] rounded-[8px] z-[-1]">
          <div className="h-full lg:overflow-hidden ">
            <img
              src={desktopZX9}
              className="lg:block relative translate-y-[24%] w-[380px]"
              alt="ZX9 Speaker"
            />
          </div>
          <div className="w-[350px] flex flex-col lg:items-start">
            <h1 className="md:text-[56px] font-bold md:leading-[58px] md:tracking-[2px] uppercase lg:mt-0 text-white lg:text-left md:px-0">
              ZX9 Speaker
            </h1>
            <p className="pb-[40px] opacity-75 w-[300px] text-base text-white mt-6 lg:text-left">
				      Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
            </p>
            <Link to="speakers/zx9-speaker">
              <button className="uppercase rounded-none bg-black text-white w-[160px] py-4">See Product</button>
            </Link>
          </div>
        </div>

        <div className="relative lg:min-w-[730px] z-[-1]">
          <img
            src={desktopZX7}
            className="lg:block w-full rounded-lg"
          />
          <div className="absolute top-0 h-full flex flex-col items-start py-[100px] lg:px-20 md:gap-4">
            <h4 className="text-[28px] font-bold leading-normal tracking-[2px] uppercase mb-8">ZX7 Speaker</h4>
            <Link to="speakers/zx7-speaker">
              <button className="btn uppercase bg-transparent text-black border-black border-2 w-[160px] rounded-none">
                See Product
              </button>
            </Link>
          </div>
        </div>

        <div className="flex md:flex-row md:gap-[11px] lg:gap-[30px] w-full md:h-full lg:min-w-[730px]">
          <div className="lg:block flex-1 bg-lg-YX1 h-[360px] bg-no-repeat bg-cover bg-center rounded-lg"></div>
          <div className="flex-1 bg-gray-light lg:h-[360px] rounded-[8px]">
            <div className="h-full flex flex-col items-start md:justify-evenly md:py-[100px] lg:px-20">
              <h4 className="text-[28px] font-bold leading-normal tracking-[2px] uppercase mb-8">YX1 Earphones</h4>
              <Link to="earphones/yx1-earphones">
                <button className="btn uppercase bg-transparent text-black border-black border-2 w-[160px] rounded-none">
                  See Product
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FooterElement />
    </div>
  );
}

export default Landing;