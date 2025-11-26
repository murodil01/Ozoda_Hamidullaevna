const News = () => {
  const handleButtonClick = () => {
    window.open("https://falco.uz", "_blank");
  };
  return (
    <div className="max-w-[1376px] mx-auto px-4 md:px-[25px] py-8 md:py-[50px]">
      <div className="border-2 border-[#26938A] rounded-2xl p-4 md:p-5">
        {/* Title */}
        <h3 className="font-medium text-[24px] sm:text-[28px] md:text-[40px] text-[#002C2B]">
          <span className="text-[#26938A]">Falco</span> Community
        </h3>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-start mt-4 md:mt-6 gap-4 md:gap-8 lg:gap-[50px] justify-between">
          {/* Text */}
          <p className="font-medium text-[14px] sm:text-[16px] md:text-[18px] text-[#002C2B] max-w-full lg:max-w-[1000px] leading-relaxed">
            Falco is a community of talented, enterprising and self-developing
            young people. Here you will find knowledge, practical experience and
            the support of a strong team in one place. Falco serves to unlock
            the potential of young people through projects, events, trainings
            and hackathons. Falco is not just a team. This is your platform for
            growth, a place where change and success begin.
          </p>

          {/* Button */}
          <button
            onClick={handleButtonClick}
            className="bg-[#1F4F4D] text-white text-[16px] sm:text-[18px] md:text-[24px] font-medium w-full lg:w-auto max-w-full lg:max-w-[248px] rounded-full py-3 px-6 hover:bg-[#26938A] transition"
          >
            Visit Website
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;
