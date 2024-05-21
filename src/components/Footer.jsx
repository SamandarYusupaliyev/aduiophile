import { Link } from "react-router-dom";
import logo from "/assets/shared/desktop/logo.svg";
import facebook from '/assets/shared/desktop/icon-facebook.svg'
import twitter from '/assets/shared/desktop/icon-twitter.svg'
import instagram from '/assets/shared/desktop/icon-instagram.svg'

function Footer() {
  return (
    <div className="bg-black">
      <hr className="w-[101px] bg-orange-600 h-1 ml-[250px]" />
      <div className="max-container pt-20 pb-12">
        <div className="flex items-center justify-between mb-9">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <nav>
            <ul className="flex items-center gap-5">
              <li>
                <Link
                  to="/"
                  className="text-white uppercase font-bold text-xs tracking-widest hover:text-orange-600"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/headphones"
                  className="text-white uppercase font-bold text-xs tracking-widest hover:text-orange-600"
                >
                  Headphones
                </Link>
              </li>
              <li>
                <Link
                  to="/speakers"
                  className="text-white uppercase font-bold text-xs tracking-widest hover:text-orange-600"
                >
                  speakers
                </Link>
              </li>
              <li>
                <Link
                  to="/earphones"
                  className="text-white uppercase font-bold text-xs tracking-widest hover:text-orange-600"
                >
                  earphones
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-end justify-between mb-14">
          <p className="w-[540px] text-white opacity-50 text-sm">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <ul className="flex items-center gap-5">
            <li>
              <img src={facebook} alt="" />
            </li>
            <li>
              <img src={twitter} alt="" />
            </li>
            <li>
              <img src={instagram} alt="" />
            </li>
          </ul>
        </div>
        <div>
          <p className="text-white opacity-50">
            Copyright 2021. All Rights Reserved 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;