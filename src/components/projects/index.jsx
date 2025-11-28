import { Modal } from "antd";
import { useEffect, useRef, useState } from "react";
import project1 from "../../assets/projects/project1.png";
import project2 from "../../assets/projects/project2.png";
import project3 from "../../assets/projects/project3.png";
import project4 from "../../assets/projects/project4.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const cards = [
  {
    id: 1,
    image: project1,
    title: "Toyohashi Global TG project Aichi Ken Japan 2012-2014",
    description:
      "Supported international collaboration and academic exchange within the Toyohashi Global Project.",
    buttonText: "More detail",
  },
  {
    id: 2,
    image: project2,
    title: "Palm Oil & Biomass Green Energy (2013–2015)",
    description:
      "Created engineering models supporting green technology adoption.",
    buttonText: "More detail",
  },
  {
    id: 3,
    image: project3,
    title: "NEWRI Environmental Research (Singapore)",
    description:
      "Engaged in research collaboration with Singapore's NEWRI on environmental and water technologies.",
    buttonText: "More detail",
  },
  {
    id: 4,
    image: project4,
    title: "Academic Collaboration: TTPU & Japanese Universities",
    description:
      "Supported academic exchange between TTPU and Japanese universities.",
    buttonText: "More detail",
  },
];

const moreDetails = [
  {
    id: 1,
    image: project1,
    title: (
      <>
        Toyohashi Global TG project
        <span className="text-[#26938A]"> Aichi Ken Japan 2012-2014</span>
      </>
    ),
    description: (
      <>
        Focused on developing cross-border academic and industry collaboration
        in sustainable engineering and next-generation green technologies.
      </>
    ),
  },
  {
    id: 2,
    image: project2,
    title: (
      <>
        Sustainable Palm Oil Production & Biomass to Green Energy Collaboration,{" "}
        <span className="text-[#26938A]"> Malaysia–Japan (2013–2015) </span>
      </>
    ),
    description: (
      <>
        Joint research on transforming agricultural biomass into renewable
        energy, advancing circular economy practices in ASEAN.
      </>
    ),
  },
  {
    id: 3,
    image: project3,
    title: (
      <>
        International Academic Collaboration, Turin Polytechnic {""}
        <span className="text-[#26938A]">
          University in Tashkent & 4 Japanese Universities
        </span>
      </>
    ),
    description: (
      <>
        Joint research on transforming agricultural biomass into renewable
        energy, advancing circular economy practices in ASEAN.
      </>
    ),
  },
  {
    id: 4,
    image: project4,
    title: (
      <>
        Singapore NEWRI & Knowledge Exchange with
        <span className="text-[#26938A]">
          {" "}
          Politecnico di Torino, Italy (Water Research)
        </span>
      </>
    ),
    description: (
      <>
        Knowledge exchange initiative on water sustainability and environmental
        engineering between Nanyang Environment & Water Research Institute
        (Singapore) and Politecnico di Torino (Italy).
      </>
    ),
  },
];

const Projects = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selected, setSelected] = useState(null);
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

  const openDetail = (id) => {
    setSelected(moreDetails.find((i) => i.id === id));
    setOpenModal(true);
  };

  return (
    <section
      id="project"
      className="w-full px-4 sm:px-8 lg:px-16 xl:px-24 2xl:max-w-[1376px] mx-auto py-16 lg:py-20"
    >
      {/* Title */}
      <div className="mb-12 lg:mb-16 text-left">
        <h3 className="text-[#002C2B] text-2xl sm:text-3xl lg:text-[32px] font-normal">
          - Projects
        </h3>
        <h3 className="text-[28px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-medium leading-tight text-[#26938A]">
          International Research <span className="text-[#002C2B]">&</span>{" "}
          Sustainability
          <br className="hidden sm:block" />
          <span className="text-[#002C2B]"> Projects</span>
        </h3>
      </div>

      {/* Slider Container */}
      <div className="relative">
        {/* Cards Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pb-4"
          onScroll={checkScrollButtons}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="shrink-0 w-[88vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center sm:snap-start"
            >
              <div className="bg-white rounded-2xl border-2 border-[#ECECEC] hover:border-[#26938A] shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col overflow-hidden group">
                <div
                  className="p-5 lg:p-6 cursor-pointer"
                  onClick={() => openDetail(card.id)}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-52 sm:h-56 lg:h-64 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <h3 className="text-xl sm:text-2xl font-bold mt-5 text-[#002C2B] leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-base sm:text-lg text-[#002C2B]/80 mt-3 line-clamp-3">
                    {card.description}
                  </p>
                </div>

                <div className="p-5 lg:p-6 pt-0 mt-auto">
                  <button
                    onClick={() => openDetail(card.id)}
                    className="w-full py-4 rounded-full text-lg font-medium transition-all bg-[#ECECEC] hover:bg-[#1F4F4D] text-[#002C2B] hover:text-white"
                  >
                    More detail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ARROWS — ALWAYS BELOW, FIXED POSITION */}
        <div className="flex justify-end gap-4 mt-10">
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

      {/* MODAL */}
      <Modal
        open={openModal}
        onCancel={() => setOpenModal(false)}
        footer={null}
        closeIcon={null}
        width="95vw"
        style={{ top: 40, maxWidth: 1280 }}
        modalRender={(modal) => (
          <div className="rounded-2xl overflow-hidden">{modal}</div>
        )}
      >
        {selected && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-2 lg:p-10 bg-white rounded-3xl">
            <img
              src={selected.image}
              alt="Detail"
              className="w-full h-auto rounded-2xl shadow-xl object-cover"
            />
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#002C2B] leading-tight">
                {selected.title}
              </h3>
              <div className="mt-6 text-lg sm:text-xl text-[#002C2B]/90 leading-relaxed space-y-4">
                {typeof selected.description === "string" ? (
                  <p>{selected.description}</p>
                ) : (
                  selected.description
                )}
              </div>
              <button
                onClick={() => setOpenModal(false)}
                className="mt-10 w-fit px-10 py-4 font-medium text-[14px] bg-[#1F4F4D] text-white rounded-full hover:bg-[#26938A] transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Projects;
