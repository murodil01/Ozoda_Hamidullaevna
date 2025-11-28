import { useEffect, useRef, useState } from "react";
import murodil from "../../assets/team/murodil.png";
import iskandar from "../../assets/team/iskandar.png";
import mushtariybegim from "../../assets/team/mushtariybegim.png";
import nodir from "../../assets/team/nodir.png";
import shaxrizoda from "../../assets/team/shaxrizoda.png";
import fozil from "../../assets/team/fozil.png";
import gozal from "../../assets/team/gozal.png";
import { FaArrowLeft, FaArrowRight, FaTelegram } from "react-icons/fa6";
import {} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const cards = [
  {
    id: 1,
    image: iskandar,
    fullName: "Hamrayev Iskandar Alisher o'g'li",
    email: "Hamraev-2000@mail.ru",
    telegram: "https://t.me/HamrayevIskandar",
  },
  {
    id: 2,
    image: shaxrizoda,
    fullName: "Xakimova Shahrizoda Dilmurodovna ",
    email: "shahri@gmail.com",
    telegram: "https://t.me/shahri_2611",
  },
  {
    id: 3,
    image: nodir,
    fullName: "Narkuziyev Nodirbek Kadirovich",
    email: "nodirnarkuziyev@mail.ru",
    telegram: "https://t.me/Narkuziyev",
  },
  {
    id: 4,
    image: mushtariybegim,
    fullName: "Muxammadova Mushtariybegim Otabekovna",
    email: "mushtariybegim215@gmail.com",
    telegram: "https://t.me/Mushtariybegim_Otabekovna",
  },
  {
    id: 5,
    image: fozil,
    fullName: "Foziljon Ruzmamatov Asliddin o'g'li",
    email: "fozilruzmamatoz@gmail.com",
    telegram: "https://t.me/Foziljon_Ruzmamatov",
  },
  {
    id: 6,
    image: gozal,
    fullName: "Xasanova Go’zal \nO’ktamovna",
    email: "xasanovagozal3@gmail.com",
    telegram: "https://t.me/ghasanova0205",
  },
  {
    id: 7,
    image: murodil,
    fullName: "Nurmamatov Murodil Mansur o'g'li",
    email: "nurmamatovmirodil978@gmail.com",
    telegram: "https://t.me/Murodil_N",
  },
];

const Team = () => {
  const sliderRef = useRef(null);

  const checkScrollButtons = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanPrev(scrollLeft > 10);
    setCanNext(scrollLeft + clientWidth < scrollWidth - 10);
  };

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const scrollPrev = () => {
    sliderRef.current?.scrollBy({ left: -420, behavior: "smooth" });
  };

  const scrollNext = () => {
    if (!sliderRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;

    // Oxiriga yetganini tekshiramiz
    if (scrollLeft + clientWidth >= scrollWidth - 10) {
      // BOSHIGA QAYTADI
      sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      sliderRef.current.scrollBy({ left: 420, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      checkScrollButtons();
      const handle = () => checkScrollButtons();
      slider.addEventListener("scroll", handle);
      window.addEventListener("resize", handle);

      // AUTOPLAY: har 3 soniyada next tugmasi chaqiriladi
      const interval = setInterval(() => {
        scrollNext();
      }, 3000);

      return () => {
        slider.removeEventListener("scroll", handle);
        window.removeEventListener("resize", handle);
        clearInterval(interval);
      };
    }
  }, []);

  return (
    <section
      id="team"
      className="w-full px-4 sm:px-8 lg:px-16 xl:px-24 2xl:max-w-[1376px] 2xl:mx-auto py-16 lg:py-20"
    >
      {/* Title */}
      <div className="mb-12 lg:mb-16 text-left">
        <h3 className="text-[#002C2B] text-2xl sm:text-3xl lg:text-[32px] font-normal">
          - Team
        </h3>
        <h3 className="text-[28px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-medium leading-tight text-[#26938A]">
          <span className="text-[#002C2B]">Dr. Ozoda’s </span> Team
        </h3>
      </div>

      {/* Slider Container */}
      <div className="relative">
        
        {/* Cards Slider */}
        <div
          ref={sliderRef}
          className="flex justify-center sm:justify-start gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pb-4"
          onScroll={checkScrollButtons}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="shrink-0 w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center sm:snap-start"
            >
              <div className="bg-white rounded-2xl border-2 border-[#DBDBDB] hover:border-[#26938A] shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col overflow-hidden group">
                <div className="p-3 lg:py-[38px] px-3 lg:px-4 cursor-pointer">
                  <img
                    src={card.image}
                    alt={card.fullName}
                    className="w-full h-[327px] sm:h-56 lg:h-[410px] object-cover rounded-lg"
                    loading="lazy"
                  />
                  <h3 className="text-xl min-h-[60px] flex items-center justify-center text-center sm:text-2xl font-bold mt-5 text-[#002C2B] leading-tight">
                    {card.fullName.split("\n").map((line, index) => (
                      <span key={index} className="block">
                        {line}
                      </span>
                    ))}
                  </h3>

                  <div className="flex items-center justify-center gap-3.5 mt-6">
                    <a
                      href={`mailto:${card.email}`}
                      className="bg-[#1F4F4D] hover:bg-[#0A66C2] text-white p-[11px] rounded-full border-none transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="email"
                    >
                      <MdEmail size={20} />
                    </a>

                    <a
                      href={card.telegram}
                      className="bg-[#1F4F4D] hover:bg-[#0088CC] text-white p-[11px] rounded-full border-none transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="telegram"
                    >
                      <FaTelegram size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ARROWS — ALWAYS BELOW, FIXED POSITION */}
        <div className="flex justify-center sm:justify-end gap-4 mt-10">
          <button
            aria-label="prev"
            onClick={scrollPrev}
            disabled={!canPrev}
            className={`p-4 rounded-full transition-all flex items-center justify-center shadow-lg ${
              !canPrev
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-[#1F4F4D] text-white hover:bg-[#26938A]"
            }`}
          >
            <FaArrowLeft size={24} />
          </button>

          <button
            aria-label="next"
            onClick={scrollNext}
            disabled={!canNext}
            className={`p-4 rounded-full transition-all flex items-center justify-center shadow-lg ${
              !canNext
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-[#1F4F4D] text-white hover:bg-[#26938A]"
            }`}
          >
            <FaArrowRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
