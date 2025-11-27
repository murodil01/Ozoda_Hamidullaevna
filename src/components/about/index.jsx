import { useState } from "react";
import about from "../../assets/about.png";
import about_modal from "../../assets/about_modal.png";
const About = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      id="about"
      className="max-w-[1376px] mx-auto px-4 md:px-[25px] flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-5 py-16 md:py-[140px]"
    >
      {/* Image Section */}
      <div className="flex-none w-full lg:w-auto">
        <img
          src={about}
          alt="Dr. Ozoda Hamidullaevna Yuldasheva"
          className="max-w-full lg:max-w-[610px] w-full h-auto rounded-2xl"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-4 md:gap-6 w-full lg:w-1/2">
        <h2 className="text-[#002C2B] text-xl md:text-[32px] font-normal">
          - About me
        </h2>
        <h3 className="text-[#26938A] text-2xl md:text-[47px] font-medium">
          <span className="text-[#002C2B]">Who is</span> Dr. Ozoda <br />{" "}
          Hamidullaevna Yuldasheva
        </h3>

        <div className="space-y-3 md:space-y-2">
          <p className="text-[#002C2B] text-base md:text-[24px] font-normal leading-relaxed">
            Delivered keynote and panel presentations at international
            sustainability events
          </p>
          <p className="text-[#002C2B] text-base md:text-[24px] font-normal leading-relaxed">
            Led collaborative projects on green energy production, circular
            economy solutions, and renewable energy integration
          </p>
          <p className="text-[#002C2B] text-base md:text-[24px] font-normal leading-relaxed">
            Guided companies in developing sustainability indicators and
            long-term environmental strategies
          </p>
          <p className="text-[#002C2B] text-base md:text-[24px] font-normal leading-relaxed">
            Worked alongside industrial, governmental, and academic institutions
            across Japan, Singapore, Malaysia, and Uzbekistan
          </p>
          <div className="flex justify-center md:justify-start">
            <button
              onClick={() => setOpen(true)}
              className="max-w-[316px] w-full bg-[#1F4F4D] font-medium rounded-4xl text-[17px] md:text-[24px] text-white py-3"
            >
              Learn more
            </button>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <div
          onClick={() => setOpen(false)} // overlay click
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
        >
          <div
            onClick={(e) => e.stopPropagation()} // modal click ignore
            className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-[1100px] relative flex flex-col gap-5 md:flex-row md:items-start overflow-hidden"
          >
            {/* Image */}
            <img
              src={about_modal}
              alt="Dr. Ozoda Hamidullaevna"
              className="w-full rounded-2xl md:w-1/2 h-[220px] md:h-auto object-cover"
            />

            {/* Content */}
            <div className=" flex flex-col justify-center gap-4">
              <h3 className="text-[#26938A] text-xl md:text-[35px] font-semibold">
                <span className="text-[#002C2B]">Who is</span> Dr. Ozoda
                Hamidullaevna Yuldasheva
              </h3>

              <p className="text-[#002C2B] text-sm md:text-[18px] leading-relaxed">
                She is also one of the first elite English-based alumni of the
                Tashkent State Technical University’s Umid Foundation Talent
                Group, where top students were specially selected and trained in
                engineering disciplines in English. <br /> Her mission is to
                advance sustainable engineering systems, foster global academic
                cooperation, and support organizations in transitioning toward a
                cleaner, more resilient future.
              </p>

              <button
                onClick={() => setOpen(false)}
                className="w-fit px-10 py-4 font-medium text-[14px] bg-[#1F4F4D] text-white rounded-full hover:bg-[#26938A] transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
