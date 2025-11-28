// import { useState, useEffect } from "react";
// import {
//   FaLinkedin,
//   FaBars,
//   FaTimes,
//   FaInstagram,
// } from "react-icons/fa";
// import { BsTelegram } from "react-icons/bs";
// import hero1 from "../../assets/hero/hero1.png";
// import hero2 from "../../assets/hero/hero2.svg";
// import { MdEmail } from "react-icons/md";

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const handleMobileNavClick = (sectionId) => {
//     setIsMobileMenuOpen(false);
//     setTimeout(() => {
//       document
//         .getElementById(sectionId)
//         ?.scrollIntoView({ behavior: "smooth" });
//     }, 100);
//   };

//   const handleDesktopNavClick = (e, sectionId) => {
//     e.preventDefault();
//     document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <>
//       {/* Scroll navbar - faqat scroll qilganda ko'rinadi */}
//       {isScrolled && (
//         <div className="fixed top-0 left-0 right-0 z-50 bg-[#D0EEEDE5] m-2 rounded-[82px] shadow-lg transition-all duration-300">
//           <div className="max-w-[1376px] mx-auto px-4 md:px-[25px] py-5">
//             <div className="flex gap-50 items-center relative py-3 md:py-0">
//               <button
//                 aria-label="Download"
//                 className="hidden md:block bg-[#1F4F4D] hover:bg-[#26938A] transition-all text-white text-[24px] font-medium rounded-[50px] py-3.5 px-[70px] cursor-pointer"
//               >
//                 Download CV
//               </button>

//               {/* Desktop Navigation */}
//               <ul className="hidden md:flex items-center gap-6">
//                 <li className="text-[#002C2B] font-normal text-[20px] hover:text-[#26938A] transition-all cursor-pointer">
//                   <a
//                     href="#home"
//                     onClick={(e) => handleDesktopNavClick(e, "home")}
//                   >
//                     Home
//                   </a>
//                 </li>
//                 <li className="text-[#002C2B] font-normal text-[20px] hover:text-[#26938A] transition-all cursor-pointer">
//                   <a
//                     href="#about"
//                     onClick={(e) => handleDesktopNavClick(e, "about")}
//                   >
//                     About
//                   </a>
//                 </li>
//                 <li className="text-[#002C2B] font-normal text-[20px] hover:text-[#26938A] transition-all cursor-pointer">
//                   <a
//                     href="#project"
//                     onClick={(e) => handleDesktopNavClick(e, "project")}
//                   >
//                     Project
//                   </a>
//                 </li>
//                 <li className="text-[#002C2B] font-normal text-[20px] hover:text-[#26938A] transition-all cursor-pointer">
//                   <a
//                     href="#contact"
//                     onClick={(e) => handleDesktopNavClick(e, "contact")}
//                   >
//                     Contact
//                   </a>
//                 </li>
//               </ul>

//               {/* Mobile Menu Button */}
//               <div className="md:hidden absolute right-1">
//                 <button
//                   onClick={toggleMobileMenu}
//                   className="text-[#002C2B] border-2 border-[#002C2B] rounded-full text-2xl p-2"
//                   aria-label="Toggle menu"
//                 >
//                   {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
//                 </button>
//               </div>
//             </div>

//             {/* Mobile Navigation Menu */}
//             {isMobileMenuOpen && (
//               <div className="md:hidden absolute top-full left-0 right-0 z-50 mt-2 bg-white rounded-2xl p-4 shadow-lg">
//                 <ul className="flex flex-col gap-4">
//                   <li
//                     className="text-[#002C2B] font-normal text-[18px] hover:text-[#26938A] transition-all cursor-pointer py-2"
//                     onClick={() => handleMobileNavClick("home")}
//                   >
//                     Home
//                   </li>
//                   <li
//                     className="text-[#002C2B] font-normal text-[18px] hover:text-[#26938A] transition-all cursor-pointer py-2"
//                     onClick={() => handleMobileNavClick("about")}
//                   >
//                     About
//                   </li>
//                   <li
//                     className="text-[#002C2B] font-normal text-[18px] hover:text-[#26938A] transition-all cursor-pointer py-2"
//                     onClick={() => handleMobileNavClick("project")}
//                   >
//                     Project
//                   </li>
//                   <li
//                     className="text-[#002C2B] font-normal text-[18px] hover:text-[#26938A] transition-all cursor-pointer py-2"
//                     onClick={() => handleMobileNavClick("contact")}
//                   >
//                     Contact
//                   </li>
//                 </ul>
//                 <button
//                   aria-label="Download"
//                   className="w-full mt-4 bg-[#1F4F4D] hover:bg-[#26938A] transition-all text-white text-[18px] font-medium rounded-[50px] py-3 px-6 cursor-pointer"
//                   onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                   Download CV
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Hero Section */}
//       <div
//         id="home"
//         className="max-w-[1376px] mx-auto bg-[#AFC3C1] mt-8 rounded-4xl relative overflow-hidden
//             bg-no-repeat bg-bottom-right
//             bg-size-[60%] sm:bg-size-[50%] md:bg-size-[40%]
//             px-4 py-[55px] md:px-[68px]"
//         style={{ backgroundImage: `url(${hero1})` }}
//       >
//         {/* Navbar ichida */}
//         <div className="relative z-10">
//           <div className="flex gap-50 items-center relative">
//             <button className="hidden md:block bg-[#1F4F4D] hover:bg-[#26938A] transition-all text-white text-[24px] font-medium rounded-[50px] py-3.5 px-[70px] cursor-pointer">
//               Download CV
//             </button>
//             {/* Desktop Navigation */}
//             <ul className="hidden md:flex items-center gap-6">
//               <li className="text-[#002C2B] font-normal text-[20px] hover:text-[#26938A] transition-all cursor-pointer">
//                 <a
//                   href="#home"
//                   onClick={(e) => handleDesktopNavClick(e, "home")}
//                 >
//                   Home
//                 </a>
//               </li>
//               <li className="text-[#002C2B] font-normal text-[20px] hover:text-[#26938A] transition-all cursor-pointer">
//                 <a
//                   href="#about"
//                   onClick={(e) => handleDesktopNavClick(e, "about")}
//                 >
//                   About
//                 </a>
//               </li>
//               <li className="text-[#002C2B] font-normal text-[20px] hover:text-[#26938A] transition-all cursor-pointer">
//                 <a
//                   href="#project"
//                   onClick={(e) => handleDesktopNavClick(e, "project")}
//                 >
//                   Project
//                 </a>
//               </li>
//               <li className="text-[#002C2B] font-normal text-[20px] hover:text-[#26938A] transition-all cursor-pointer">
//                 <a
//                   href="#contact"
//                   onClick={(e) => handleDesktopNavClick(e, "contact")}
//                 >
//                   Contact
//                 </a>
//               </li>
//             </ul>
//             {/* Mobile Menu Button */}
//             <div className="md:hidden absolute right-0">
//               <button
//                 onClick={toggleMobileMenu}
//                 className="text-[#002C2B] border-2 border-[#002C2B] rounded-full text-2xl p-2 z-20 relative"
//                 aria-label="Toggle menu"
//               >
//                 {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
//               </button>
//             </div>
//             {/* Mobile Navigation Menu - Hero section ichida */}
//             {isMobileMenuOpen && (
//               <div className="md:hidden absolute top-10 left-0 right-0 z-50 mt-2 bg-white rounded-2xl p-4 shadow-lg">
//                 <ul className="flex flex-col gap-4">
//                   <li
//                     className="text-[#002C2B] font-normal text-[18px] hover:text-[#26938A] transition-all cursor-pointer py-2"
//                     onClick={() => handleMobileNavClick("home")}
//                   >
//                     Home
//                   </li>
//                   <li
//                     className="text-[#002C2B] font-normal text-[18px] hover:text-[#26938A] transition-all cursor-pointer py-2"
//                     onClick={() => handleMobileNavClick("about")}
//                   >
//                     About
//                   </li>
//                   <li
//                     className="text-[#002C2B] font-normal text-[18px] hover:text-[#26938A] transition-all cursor-pointer py-2"
//                     onClick={() => handleMobileNavClick("project")}
//                   >
//                     Project
//                   </li>
//                   <li
//                     className="text-[#002C2B] font-normal text-[18px] hover:text-[#26938A] transition-all cursor-pointer py-2"
//                     onClick={() => handleMobileNavClick("contact")}
//                   >
//                     Contact
//                   </li>
//                 </ul>

//                 <button
//                   aria-label="Download"
//                   className="w-full mt-4 bg-[#1F4F4D] hover:bg-[#26938A] transition-all text-white text-[18px] font-medium rounded-[50px] py-3 px-6 cursor-pointer"
//                   onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                   Download CV
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* Hero Content */}
//           <div className="my-16 md:my-25">
//             <div>
//               <h1 className="text-[#FFFFFF] text-[27px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-[70px] font-bold">
//                 Dr. Ozoda Hamidullaevna <br /> Yuldasheva
//               </h1>
//               <p className="text-[#FFFFFF] text-[16px] sm:text-lg md:text-xl mt-4 lg:text-2xl xl:text-[28px] font-normal max-w-[700px]">
//                 Green energy systems, material flow analysis, ESG/SDG strategies
//                 and international academic coordination
//               </p>
//               <div className="flex flex-col md:flex-row items-start gap-4 md:gap-80 mt-7">
//                 <div className="flex items-center gap-3.5">
//                   <a
//                     aria-label="email"
//                     className="bg-[#1F4F4D] hover:bg-[#1877F2] transition-all rounded-full text-white text-[20px] p-3"
//                     href="mailto:dr.ozodayuldasheva@gmail.com"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <MdEmail />
//                   </a>

//                   <a
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="instagram"
//                     className="bg-[#1F4F4D] hover:bg-[#1DA1F2] transition-all rounded-full text-white text-[20px] p-3"
//                     href="https://www.instagram.com/accounts/login/?next=%2Fdr.ozoda_yuldasheva%2F&source=omni_redirect"
//                   >
//                     <FaInstagram />
//                   </a>

//                   <a
//                     aria-label="linkedin"
//                     className="bg-[#1F4F4D] hover:bg-[#0A66C2] transition-all rounded-full text-white text-[20px] p-3"
//                     href="https://www.linkedin.com/in/dr-ozoda-yuldasheva/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FaLinkedin />
//                   </a>

//                   <a
//                     aria-label="telegram"
//                     className="bg-[#1F4F4D] hover:bg-[#0088CC] transition-all rounded-full text-white text-[20px] p-3"
//                     href="https://t.me/FOSNAASH/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <BsTelegram />
//                   </a>
//                 </div>
//                 <img
//                   className="max-w-[100px] md:max-w-[131px] w-full h-auto rounded-full spin-slow"
//                   src={hero2}
//                   alt="Image"
//                   loading="lazy"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;

import { useState, useEffect } from "react";
import { FaLinkedin, FaBars, FaTimes, FaInstagram } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import hero1 from "../../assets/hero/hero1.png";
import hero2 from "../../assets/hero/hero2.svg";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileNavClick = (sectionId) => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleDesktopNavClick = (e, sectionId) => {
    e.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  // Mobile menu ni yopish
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Scroll navbar - faqat scroll qilganda ko'rinadi */}
      {isScrolled && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-[#D0EEEDE5] mx-2 sm:mx-6 md:mx-10 lg:mx-14 xl:mx-18 my-2 rounded-[82px] shadow-lg transition-all duration-300">
          <div className="max-w-[1290px] mx-auto px-4 md:px-[25px] py-5">
            <div className="flex gap-50 items-center relative py-3 md:py-0">
              <button
                onClick={() => window.open("/files/Resume_OY.pdf", "_blank")}
                aria-label="Download"
                className="hidden md:block bg-[#1F4F4D] hover:bg-[#26938A] transition-all text-white text-[24px] font-medium rounded-[50px] py-3.5 px-[70px] cursor-pointer"
              >
                Download CV
              </button>

              {/* Desktop Navigation */}
              <ul className="hidden md:flex items-center gap-6">
                <li className="text-[#002C2B] font-normal text-[20px] hover:text-[#26938A] transition-all cursor-pointer">
                  <a
                    href="#home"
                    onClick={(e) => handleDesktopNavClick(e, "home")}
                  >
                    Home
                  </a>
                </li>
                <li className="text-[#002C2B] font-normal text-[20px] hover:text-[#26938A] transition-all cursor-pointer">
                  <a
                    href="#about"
                    onClick={(e) => handleDesktopNavClick(e, "about")}
                  >
                    About
                  </a>
                </li>
                <li className="text-[#002C2B] font-normal text-[20px] hover:text-[#26938A] transition-all cursor-pointer">
                  <a
                    href="#project"
                    onClick={(e) => handleDesktopNavClick(e, "project")}
                  >
                    Project
                  </a>
                </li>
                <li className="text-[#002C2B] font-normal text-[20px] hover:text-[#26938A] transition-all cursor-pointer">
                  <a
                    href="#contact"
                    onClick={(e) => handleDesktopNavClick(e, "contact")}
                  >
                    Contact
                  </a>
                </li>
              </ul>

              {/* Mobile Menu Button */}
              <div className="md:hidden absolute right-1">
                <button
                  onClick={toggleMobileMenu}
                  className="text-[#002C2B] border-2 border-[#002C2B] rounded-full text-2xl p-2"
                  aria-label="Toggle menu"
                >
                  <FaBars />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div
        id="home"
        className="max-w-[1376px] mx-auto bg-[#AFC3C1] mt-8 rounded-4xl relative overflow-hidden
            bg-no-repeat bg-bottom-right
            bg-size-[60%] sm:bg-size-[50%] md:bg-size-[40%]
            px-4 py-[55px] md:px-[68px]"
        style={{ backgroundImage: `url(${hero1})` }}
      >
        {/* Navbar ichida */}
        <div className="relative z-10">
          <div className="flex gap-50 items-center relative">
            <button
              onClick={() => window.open("/files/Resume_OY.pdf", "_blank")}
              className="hidden md:block bg-[#1F4F4D] hover:bg-[#26938A] transition-all text-white text-[24px] font-medium rounded-[50px] py-3.5 px-[70px] cursor-pointer"
            >
              Download CV
            </button>
            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-6">
              <li className="text-[#002C2B] font-normal text-[20px] hover:text-[#26938A] transition-all cursor-pointer">
                <a
                  href="#home"
                  onClick={(e) => handleDesktopNavClick(e, "home")}
                >
                  Home
                </a>
              </li>
              <li className="text-[#002C2B] font-normal text-[20px] hover:text-[#26938A] transition-all cursor-pointer">
                <a
                  href="#about"
                  onClick={(e) => handleDesktopNavClick(e, "about")}
                >
                  About
                </a>
              </li>
              <li className="text-[#002C2B] font-normal text-[20px] hover:text-[#26938A] transition-all cursor-pointer">
                <a
                  href="#project"
                  onClick={(e) => handleDesktopNavClick(e, "project")}
                >
                  Project
                </a>
              </li>
              <li className="text-[#002C2B] font-normal text-[20px] hover:text-[#26938A] transition-all cursor-pointer">
                <a
                  href="#contact"
                  onClick={(e) => handleDesktopNavClick(e, "contact")}
                >
                  Contact
                </a>
              </li>
            </ul>
            {/* Mobile Menu Button */}
            <div className="md:hidden absolute right-0">
              <button
                onClick={toggleMobileMenu}
                className="text-[#002C2B] border-2 border-[#002C2B] rounded-full text-2xl p-2 z-20 relative"
                aria-label="Toggle menu"
              >
                <FaBars />
              </button>
            </div>
          </div>

          {/* Hero Content */}
          <div className="my-16 md:my-25">
            <div>
              <h1 className="text-[#FFFFFF] text-[27px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-[70px] font-bold">
                Dr. Ozoda Hamidullaevna <br /> Yuldasheva
              </h1>
              <p className="text-[#FFFFFF] text-[16px] sm:text-lg md:text-xl mt-4 lg:text-2xl xl:text-[28px] font-normal max-w-[700px]">
                Green energy systems, material flow analysis, ESG/SDG strategies
                and international academic coordination
              </p>
              <div className="flex flex-col md:flex-row items-start gap-4 md:gap-80 mt-7">
                <div className="flex items-center gap-3.5">
                  <a
                    aria-label="email"
                    className="bg-[#1F4F4D] hover:bg-[#1877F2] transition-all rounded-full text-white text-[20px] p-3"
                    href="mailto:dr.ozodayuldasheva@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MdEmail />
                  </a>

                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="instagram"
                    className="bg-[#1F4F4D] hover:bg-[#E1306C] transition-all rounded-full text-white text-[20px] p-3"
                    href="https://www.instagram.com/accounts/login/?next=%2Fdr.ozoda_yuldasheva%2F&source=omni_redirect"
                  >
                    <FaInstagram />
                  </a>

                  <a
                    aria-label="linkedin"
                    className="bg-[#1F4F4D] hover:bg-[#0A66C2] transition-all rounded-full text-white text-[20px] p-3"
                    href="https://www.linkedin.com/in/dr-ozoda-yuldasheva/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>

                  <a
                    aria-label="telegram"
                    className="bg-[#1F4F4D] hover:bg-[#0088CC] transition-all rounded-full text-white text-[20px] p-3"
                    href="https://t.me/FOSNAASH/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsTelegram />
                  </a>
                </div>
                <img
                  className="max-w-[100px] md:max-w-[131px] w-full h-auto rounded-full spin-slow"
                  src={hero2}
                  alt="Image"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bitta Mobile Navigation Menu - Barcha joylar uchun */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white bg-opacity-50 flex items-start justify-center pt-20 px-4">
          <div className="bg-[#D0EEEDE5] rounded-2xl p-6 w-full max-w-md relative">
            {/* Close Button - Modal ichida */}
            <button
              onClick={closeMobileMenu}
              className="absolute top-4 right-4 text-[#002C2B] text-xl p-2 rounded-full hover:bg-[#1F4F4D] hover:text-white transition-all"
              aria-label="Close menu"
            >
              <FaTimes />
            </button>

            <ul className="flex flex-col gap-4 mt-6">
              <li
                className="text-[#002C2B] font-normal text-[18px] hover:text-[#26938A] transition-all cursor-pointer py-3 px-4 rounded-lg hover:bg-gray-50"
                onClick={() => handleMobileNavClick("home")}
              >
                Home
              </li>
              <li
                className="text-[#002C2B] font-normal text-[18px] hover:text-[#26938A] transition-all cursor-pointer py-3 px-4 rounded-lg hover:bg-gray-50"
                onClick={() => handleMobileNavClick("about")}
              >
                About
              </li>
              <li
                className="text-[#002C2B] font-normal text-[18px] hover:text-[#26938A] transition-all cursor-pointer py-3 px-4 rounded-lg hover:bg-gray-50"
                onClick={() => handleMobileNavClick("project")}
              >
                Project
              </li>
              <li
                className="text-[#002C2B] font-normal text-[18px] hover:text-[#26938A] transition-all cursor-pointer py-3 px-4 rounded-lg hover:bg-gray-50"
                onClick={() => handleMobileNavClick("contact")}
              >
                Contact
              </li>
            </ul>

            <button
              aria-label="Download"
              className="w-full mt-6 bg-[#1F4F4D] hover:bg-[#26938A] transition-all text-white text-[18px] font-medium rounded-[50px] py-3 px-6 cursor-pointer"
              onClick={() => {
                closeMobileMenu();
                window.open("/files/Resume_OY.pdf", "_blank");
              }}
            >
              Download CV
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
