import { MdEmail } from "react-icons/md";
import { FaInstagram, FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-[#F6F6F673]">
      <div className="max-w-[1376px] mx-auto px-5 sm:px-10 md:px-[25px] py-10 flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Logo & Contact */}
        <div className="flex flex-col gap-4 md:w-[400px]">
          <a
            aria-label="email"
            href="mailto:dr.ozodayuldasheva@gmail.com"
            target="_blank"
            className="flex items-center gap-2 text-[#000000] text-[16px] font-normal hover:text-[#26938A] transition-all cursor-pointer"
          >
            <MdEmail size={20} />
            dr.ozodayuldasheva@gmail.com
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-[#000000] text-[16px] font-normal hover:text-[#26938A] transition-all cursor-pointer"
          >
            <FaLocationDot size={20} />
            All Rights Reserved. <br /> Sustainability • Engineering • ESG
            Consulting
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-[#000000] text-[16px] font-normal hover:text-[#26938A] transition-all cursor-pointer"
          >
            <FaPhoneAlt size={20} />
            +998 (__) --_
          </a>
        </div>

        {/* Home va About us */}
        <div className="flex flex-col sm:flex-row md:w-[490px] justify-between gap-5">
          {/* Home */}
          <div className="flex flex-col gap-2.5">
            <h3 className="text-[#000000] text-[18px] font-medium">Home</h3>
            <ul className="flex flex-col gap-2">
              <li className="text-[#000000] text-[16px] font-normal hover:text-[#26938A] transition-all cursor-pointer">
                Key Expertise Areas
              </li>
              <li className="text-[#000000] text-[16px] font-normal hover:text-[#26938A] transition-all cursor-pointer">
                Recognitions & Scholarships
              </li>
              <li className="text-[#000000] text-[16px] font-normal hover:text-[#26938A] transition-all cursor-pointer">
                <a href="#contact">Get in Touch with me</a>
              </li>
            </ul>
          </div>

          {/* About us */}
          <div className="flex flex-col gap-2.5">
            <h3 className="text-[#000000] text-[18px] font-medium">About us</h3>
            <ul className="flex flex-col gap-2">
              <li className="text-[#000000] text-[16px] font-normal hover:text-[#26938A] transition-all cursor-pointer">
                <a href="#team">Dr. Ozoda’s Team</a>
              </li>
              <li className="text-[#000000] text-[16px] font-normal hover:text-[#26938A] transition-all cursor-pointer">
                <a href="#experience">International Experience</a>
              </li>
              <li className="text-[#000000] text-[16px] font-normal hover:text-[#26938A] transition-all cursor-pointer">
                <a href="#project">Projects</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col gap-3.5 md:w-[220px]">
          <h3 className="text-[#000000] text-[18px] font-medium">
            Social Links
          </h3>
          <div className="flex items-center gap-3.5 flex-wrap">
            <a
              aria-label="facebook"
              className="bg-[#1F4F4D] rounded-full text-white text-[20px] p-3 hover:bg-[#1877F2] transition-all cursor-pointer"
              href="#"
            >
              <FaFacebook />
            </a>

            <a
              className="bg-[#1F4F4D] rounded-full text-white text-[20px] p-3 hover:bg-[#1DA1F2] transition-all cursor-pointer"
              href="https://www.instagram.com/accounts/login/?next=%2Fdr.ozoda_yuldasheva%2F&source=omni_redirect"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              className="bg-[#1F4F4D] rounded-full text-white text-[20px] p-3 hover:bg-[#0A66C2] transition-all cursor-pointer"
              href="https://www.linkedin.com/in/dr-ozoda-yuldasheva/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              className="bg-[#1F4F4D] rounded-full text-white text-[20px] p-3 hover:bg-[#0088CC] transition-all cursor-pointer"
              href="https://t.me/FOSNAASH/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="telegram"
            >
              <BsTelegram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
