import achieve1 from "../../assets/achivements/achieve1.svg";
import achieve2 from "../../assets/achivements/achieve2.svg";
import achieve3 from "../../assets/achivements/achieve3.svg";

const Achievements = () => {
  return (
    <div className="bg-[#AFC3C1]">
      <div className="max-w-[1376px] mx-auto px-4 md:px-[25px] flex flex-col lg:flex-row items-start md:justify-between justify-center gap-8 lg:gap-5 py-12 md:py-20">
        {/* Title Section */}
        <h3 className="text-[#26938A] text-3xl md:text-[48px] font-medium capitalize lg:max-w-[500px]">
          <span className="text-[#002C2B]">Empowering</span> futures{" "}
          <span className="text-[#002C2B]">with</span> knowledge.
        </h3>

        {/* Achievements Cards - Scrollable but invisible scrollbar */}
        <div className="w-full lg:w-auto overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-6 md:gap-3 min-w-max pb-4">
            {/* Achievement 1 */}
            <div className="flex gap-5 items-start min-w-[200px] md:min-w-0">
              <img
                src={achieve1}
                alt="International collaborations"
                className="max-w-12 md:max-w-[75px] w-full h-auto"
                loading="lazy"
              />
              <div>
                <h3 className="text-[#1F4F4D] text-5xl md:text-[80px] font-medium">
                  30+
                </h3>
                <p className="text-[#002C2B] text-sm md:text-[18px] font-medium mt-2">
                  International <br /> collaborations
                </p>
              </div>
            </div>

            {/* Achievement 2 */}
            <div className="flex gap-5 items-start min-w-[200px] md:min-w-0">
              <img
                src={achieve2}
                alt="Academic projects"
                className="max-w-12 md:max-w-[75px] w-full h-auto"
                loading="lazy"
              />
              <div>
                <h3 className="text-[#1F4F4D] text-5xl md:text-[80px] font-medium">
                  15+
                </h3>
                <p className="text-[#002C2B] text-sm md:text-[18px] font-medium mt-2">
                  Academic <br /> projects
                </p>
              </div>
            </div>

            {/* Achievement 3 */}
            <div className="flex gap-5 items-start min-w-[200px] md:min-w-0">
              <img
                src={achieve3}
                alt="Sustainability frameworks"
                className="max-w-12 md:max-w-[75px] w-full h-auto"
                loading="lazy"
              />
              <div>
                <h3 className="text-[#1F4F4D] text-5xl md:text-[80px] font-medium">
                  10+
                </h3>
                <p className="text-[#002C2B] text-sm md:text-[18px] font-medium mt-2">
                  Sustainability <br /> frameworks
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
