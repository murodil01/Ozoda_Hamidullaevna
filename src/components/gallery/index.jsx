import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import gallery1 from "../../assets/gallery/gallery1.JPG";
import gallery2 from "../../assets/gallery/gallery2.jpg";
import gallery3 from "../../assets/gallery/gallery3.jpg";
import gallery4 from "../../assets/gallery/gallery4.jpg";
import gallery5 from "../../assets/gallery/gallery5.jpg";

const personImage = [
  {
    id: 1,
    image: gallery1,
  },
  {
    id: 2,
    image: gallery2,
  },
  {
    id: 3,
    image: gallery3,
  },
  {
    id: 4,
    image: gallery4,
  },
  {
    id: 5,
    image: gallery5,
  },
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previewIndex, setPreviewIndex] = useState(null);

  // Ekran o‘lchamiga qarab visibleSlides va transform turi
  const getConfig = () => {
    if (typeof window === "undefined") return { visible: 4, isDesktop: true };
    const width = window.innerWidth;
    if (width >= 1280) return { visible: 4, isDesktop: true };
    if (width >= 1024) return { visible: 3, isDesktop: false };
    if (width >= 768) return { visible: 2, isDesktop: false };
    return { visible: 1, isDesktop: false };
  };

  const [config] = useState(getConfig());

  useEffect(() => {
    if (previewIndex !== null) return; // modal ochilganida autoplay to‘xtaydi

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = personImage.length - config.visible;
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [config.visible, previewIndex]);

  const prevImage = () => setCurrentIndex((p) => (p > 0 ? p - 1 : 0));

  const nextImage = () => {
    const max = personImage.length - config.visible;
    setCurrentIndex((p) => (p >= max ? max : p + 1));
  };

  const modalPrev = () =>
    setPreviewIndex((p) => (p === 0 ? personImage.length - 1 : p - 1));
  const modalNext = () =>
    setPreviewIndex((p) => (p === personImage.length - 1 ? 0 : p + 1));

  return (
    <div id="gallery">
      <div className="max-w-[1376px] mx-auto px-[25px]">
        <h3 className="text-[#002C2B] text-[32px] font-normal">- Gallery</h3>
        <h3 className="text-[#002C2B] text-4xl sm:text-5xl md:text-[44px] lg:text-[56px] font-medium">
          Photogallery
        </h3>
      </div>

      <div className="bg-[#AFC3C1] max-w-[1376px] mx-auto rounded-4xl px-[25px] py-[60px] md:py-[113px] mt-10 relative overflow-hidden">
        <div className="overflow-hidden">
          {/* Bu joyni o‘zgartirdim – hammasi shu bilan hal bo‘ldi */}
          <div className="-mx-[25px] px-[25px]">
            <div
              className="flex justify-center md:justify-start transition-transform duration-500 ease-in-out"
              style={{
                gap: config.isDesktop ? "20px" : "0px",
                transform: config.isDesktop
                  ? `translateX(-${currentIndex * 335}px)` // 315px rasm + 20px gap
                  : `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {personImage.map((person, index) => (
                <div
                  key={person.id}
                  className="shrink-0"
                  style={{
                    width: config.isDesktop ? "315px" : "100%",
                  }}
                >
                  <img
                    src={person.image}
                    alt=""
                    onClick={() => setPreviewIndex(index)}
                    className={`${
                      config.isDesktop
                        ? "w-[315px] h-[400px]"
                        : "w-full h-[411px] sm:h-[411px]"
                    } object-cover rounded-2xl cursor-pointer hover:opacity-80 transition-all duration-300 shadow-lg`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tugmalar – o‘zgarmadi */}
        <div className="flex items-center justify-end mt-[57px]">
          <div className="flex items-center gap-2.5">
            <button
              aria-label="prev"
              onClick={prevImage}
              disabled={currentIndex === 0}
              className={`py-3.5 px-3.5 rounded-full transition-all ${
                currentIndex === 0
                  ? "bg-[#ECECEC] cursor-not-allowed"
                  : "bg-[#1F4F4D] text-white hover:bg-[#002C2B]"
              }`}
            >
              <FaArrowLeft size={27} />
            </button>
            <button
              aria-label="next"
              onClick={nextImage}
              disabled={currentIndex >= personImage.length - config.visible}
              className={`py-3.5 px-3.5 rounded-full transition-all ${
                currentIndex >= personImage.length - config.visible
                  ? "bg-[#ECECEC] cursor-not-allowed"
                  : "bg-[#1F4F4D] text-white hover:bg-[#002C2B]"
              }`}
            >
              <FaArrowRight size={27} />
            </button>
          </div>
        </div>
      </div>

      {/* Modal – o‘zgarmadi */}
      {previewIndex !== null && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setPreviewIndex(null)}
        >
          <div
            className="relative flex flex-col items-center gap-5"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={personImage[previewIndex].image}
              alt="Preview"
              className="max-w-[80vw] max-h-[80vh] object-contain rounded-2xl shadow-xl"
            />

            <div className="flex gap-5 items-center">
              <button
                aria-label="prev"
                onClick={modalPrev}
                className="text-white bg-[#002C2B] p-4 rounded-full z-10"
              >
                <FaArrowLeft size={30} />
              </button>

              <button
                aria-label="next"
                onClick={modalNext}
                className="text-white bg-[#002C2B] p-4 rounded-full z-10"
              >
                <FaArrowRight size={30} />
              </button>
            </div>

            <button
              aria-label="Index"
              onClick={() => setPreviewIndex(null)}
              className="absolute -top-6 -right-10 bg-[#002C2B] text-white rounded-full p-2 shadow hover:bg-[#AFC3C1] transition"
            >
              <IoClose size={25} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
