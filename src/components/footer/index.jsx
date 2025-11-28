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
            rel="noopener noreferrer"
            aria-label="email"
            href="mailto:dr.ozodayuldasheva@gmail.com"
            target="_blank"
            className="flex items-center gap-2 text-[#000000] text-[16px] font-normal hover:text-[#26938A] transition-all cursor-pointer"
          >
            <MdEmail size={20} />
            dr.ozodayuldasheva@gmail.com
          </a>

          <a
            aria-label="location"
            href="https://www.google.com/maps/search/?api=1&query=Blk+135,+%2305-137,+Bedok+North+Street+2,+Singapore+460135"
            className="flex items-center gap-2 text-[#000000] text-[16px] font-normal hover:text-[#26938A] transition-all cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLocationDot size={20} />
            Blk 135, #05-137, Bedok North Street 2, Singapore 460135 Singapore
          </a>

          <a
            aria-label="phone"
            target="_blank"
            rel="noopener noreferrer"
            href="tel:+6580247487"
            className="flex items-center gap-2 text-[#000000] text-[16px] font-normal hover:text-[#26938A] transition-all cursor-pointer"
          >
            <FaPhoneAlt size={20} />
            +6580247487
          </a>
        </div>

        {/* Home va About us */}
        <div className="flex flex-col sm:flex-row md:w-[490px] justify-between gap-5">
          {/* Home */}
          <div className="flex flex-col gap-2.5">
            <h3 className="text-[#000000] text-[18px] font-medium">Home</h3>
            <ul className="flex flex-col gap-2">
              {/* <li className="text-[#000000] text-[16px] font-normal hover:text-[#26938A] transition-all cursor-pointer">
                <a href="#">Key Expertise Areas</a>
              </li> */}
              <li className="text-[#000000] text-[16px] font-normal hover:text-[#26938A] transition-all cursor-pointer">
                <a href="#gallery">Recognitions & Scholarships</a>
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
                <a  href="#team">Dr. Ozoda’s Team</a>
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
              href="https://www.facebook.com/share/1AGAnkeW8o/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>

            <a
              aria-label="instagram"
              className="bg-[#1F4F4D] rounded-full text-white text-[20px] p-3 hover:bg-[#E1306C] transition-all cursor-pointer"
              href="https://www.instagram.com/accounts/login/?next=%2Fdr.ozoda_yuldasheva%2F&source=omni_redirect"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              aria-label="linkedin"
              className="bg-[#1F4F4D] rounded-full text-white text-[20px] p-3 hover:bg-[#0A66C2] transition-all cursor-pointer"
              href="https://www.linkedin.com/in/dr-ozoda-yuldasheva/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              aria-label="telegram"
              className="bg-[#1F4F4D] rounded-full text-white text-[20px] p-3 hover:bg-[#0088CC] transition-all cursor-pointer"
              href="https://t.me/FOSNAASH/"
              target="_blank"
              rel="noopener noreferrer"
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
