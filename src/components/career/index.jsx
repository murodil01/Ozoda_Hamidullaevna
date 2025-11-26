import line1 from "../../assets/career/line1.svg";
import line2 from "../../assets/career/line2.svg";
import line3 from "../../assets/career/line3.svg";
import line4 from "../../assets/career/line4.svg";
import line5 from "../../assets/career/line5.svg";
import line6 from "../../assets/career/line6.svg";

const data = [
  {
    id: 1,
    year: "2001-2005",
    text: "Completed a bachelor’s program in Thermal Power Engineering within the English-based Elite Group at TSTU.",
  },
  {
    id: 2,
    year: "2005-2007",
    text: "Finished a master’s program focused on advanced energy and thermal systems.",
  },
  {
    id: 3,
    year: "2007-2009",
    text: "Worked at Tashkent Thermal Power Plant as a spare parts engineer supporting energy infrastructure operations.",
  },
  {
    id: 4,
    year: "2009-2010",
    text: "Served as a senior engineer in the Ministry of Energy’s modernization and reconstruction projects.",
  },
  {
    id: 5,
    year: "2010 (September)",
    text: "Selected as the only woman from Central Asia to pursue graduate studies in Japan under the JICA scholarship.",
  },
  {
    id: 6,
    year: "2010-2012",
    text: "Completed a master’s research in Japan on two-phase ejector refrigeration using waste heat and water-based refrigerants.",
  },
  {
    id: 7,
    year: "2012-2015",
    text: "Earned a doctorate in Japan with research on material flow analysis and physical performance in a transition economy.",
  },
  {
    id: 8,
    year: "2013–2015",
    text: "Awarded the NGK Scholarship in Japan for outstanding academic achievements.",
  },
];

export default function Career() {
  return (
    <div className="max-w-[1376px] mx-auto w-full py-8 px-[25px]">
      <h3 className="text-[#002C2B] text-[22px] md:text-[32px] font-normal mb-2">
        — Education Work
      </h3>

      <h2 className="text-[#002C2B] text-[36px] md:text-[56px] font-medium leading-tight mb-12">
        My <span className="text-[#26938A]">Career</span> &{" "}
        <span className="text-[#26938A]">Education</span>
      </h2>

      {/* ========== MOBILE VIEW ========== */}
      <div className="flex flex-col gap-10 md:hidden">
        {data.map((item) => {
          const isEven = item.id % 2 === 0;
          return (
            <div
              key={item.id}
              className={`flex items-start gap-4 ${
                isEven ? "flex-row-reverse text-right" : ""
              }`}
            >
              <div className="w-16 h-16 rounded-full bg-[#AFC3C1] hover:bg-[#1F4F4D] flex items-center justify-center text-white font-bold text-[28px] shrink-0">
                {item.id}
              </div>

              <div className="max-w-[500px]">
                <h3 className="font-medium text-[#002C2B] text-[18px] mb-1">
                  {item.year}
                </h3>
                <p className="text-[15px] text-[#002C2B] font-medium">
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ========== DESKTOP VIEW ========== */}
      <div className="relative hidden md:block" style={{ height: "1700px" }}>
        {/* LINES */}
        <img src={line1} alt="line1" className="absolute left-[130px] top-20" />
        <img
          src={line2}
          alt="line2"
          className="absolute left-[670px] top-[90px]"
        />
        <img src={line3} alt="line3" className="absolute left-0 top-[440px]" />
        <img
          src={line4}
          alt="line4"
          className="absolute left-[670px] top-[790px]"
        />
        <img src={line5} alt="line5" className="absolute left-0 top-[1140px]" />
        <img
          src={line6}
          alt="line6"
          className="absolute left-[670px] top-[1480px]"
        />

        {/* ITEMS */}
        {data.map((item) => {
          const positions = {
            1: { left: 0, top: 25, dark: false, width: 438, flex: false },
            2: { left: 540, top: 25, dark: false, width: 410, flex: false },
            3: { left: 540, top: 400, dark: true, width: 464, flex: false },
            4: { left: -50, top: 550, dark: false, width: 447, flex: true },
            5: { left: 540, top: 740, dark: false, width: 500, flex: false },
            6: { left: 540, top: 1090, dark: false, width: 500, flex: false },
            7: { left: -50, top: 1250, dark: false, width: 447, flex: true },
            8: { left: 540, top: 1440, dark: false, width: 447, flex: false },
          };
          const pos = positions[item.id];

          if (pos.flex) {
            // 4 va 7 flex-row layout
            return (
              <div
                key={item.id}
                className="absolute flex items-start gap-0"
                style={{ left: `${pos.left}px`, top: `${pos.top}px` }}
              >
                <div
                  className={`w-[111px] h-[111px] rounded-full flex items-center bg-[#AFC3C1] hover:bg-[#1F4F4D] cursor-pointer justify-center text-white font-bold text-[60px] shadow-lg ${
                    pos.dark ? "bg-[#1F4F4D]" : "bg-[#AFC3C1]"
                  }`}
                >
                  {item.id}
                </div>
                <div className="ml-6" style={{ width: `${pos.width}px` }}>
                  <h3 className="font-medium text-[#002C2B] text-[32px] mb-2">
                    {item.year}
                  </h3>
                  <p className="text-[20px] text-[#002C2B] font-medium">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          }

          // Boshqa doiralar
          return (
            <div
              key={item.id}
              className="absolute"
              style={{ left: `${pos.left}px`, top: `${pos.top}px` }}
            >
              <div
                className={`w-[111px] h-[111px] rounded-full flex items-center cursor-pointer bg-[#AFC3C1] hover:bg-[#1F4F4D] justify-center text-white font-bold text-[60px] shadow-lg ${
                  pos.dark ? "bg-[#1F4F4D]" : "bg-[#AFC3C1]"
                }`}
              >
                {item.id}
              </div>
              <div className="mt-3" style={{ width: `${pos.width}px` }}>
                <h3 className="font-medium text-[#002C2B] text-[32px] mb-2">
                  {item.year}
                </h3>
                <p className="text-[20px] text-[#002C2B] font-medium">
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
