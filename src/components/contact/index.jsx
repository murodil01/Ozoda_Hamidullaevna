import { FaLinkedin, FaPhone, FaTelegram, FaTwitter } from "react-icons/fa6";
import { useState } from "react";
import { toast } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    ism: "",
    email: "",
    phone: "",
    country: "",
    xabar: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("ism", formData.ism);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("country", formData.country);
    data.append("xabar", formData.xabar);

    try {
      const response = await fetch("https://formspree.io/f/mqavzzyw", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        toast.success("Muvaffaqiyatli yuborildi!");
        setFormData({
          ism: "",
          email: "",
          phone: "",
          country: "",
          xabar: "",
        });
      } else {
        toast.error("Xatolik yuz berdi. Qayta urinib ko‘ring.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("⚠️ Serverga ulanib bo‘lmadi.");
    }
  };

  return (
    <div
      id="contact"
      className="max-w-[1376px] mx-auto px-6 lg:px-[25px] py-[100px] lg:py-[140px]"
    >
      {/* Title */}
      <h3 className="text-[#002C2B] text-xl sm:text-2xl md:text-[28px] lg:text-[32px] font-normal">
        - Contact
      </h3>
      <h3 className="text-[#002C2B] text-4xl sm:text-5xl md:text-[44px] lg:text-[56px] font-semibold leading-tight">
        Let’s Talk <span className="text-[#26938A]">for You</span>
      </h3>

      <div className="flex flex-col lg:flex-row items-start gap-16 mt-10">
        {/* LEFT INFO */}
        <div className="max-w-[606px]">
          <h3 className="text-[#002C2B] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-relaxed">
            Green energy systems, material flow analysis, ESG/SDG strategies and
            international academic consultation.
          </h3>

          <div className="flex flex-col gap-5 mt-25">
            {/* Phone */}
            <a
              aria-label="phone"
              href="tel:+998946520203"
              className="flex items-center gap-3 group"
            >
              <div className="bg-[#1F4F4D] text-white rounded-full p-3 group-hover:bg-[#E1306C] transition-all">
                <FaPhone size={18} />
              </div>
              <span className="font-medium text-[#002C2B] text-[18px]">
                (+998) 94 652 02 03
              </span>
            </a>

            {/* Twitter */}
            <a
              aria-label="twitter"
              href="#"
              className="flex items-center gap-3 group"
            >
              <div className="bg-[#1F4F4D] text-white rounded-full p-3 group-hover:hover:bg-[#1DA1F2] transition-all">
                <FaTwitter size={18} />
              </div>
              <span className="font-medium text-[#002C2B] text-[18px]">
                jkjhgfdsrtyuiklkjhgfd
              </span>
            </a>

            {/* LinkedIn */}
            <a
              aria-label="linkedin"
              href="#"
              className="flex items-center gap-3 group"
            >
              <div className="bg-[#1F4F4D] text-white rounded-full p-3 group-hover:hover:bg-[#0A66C2] transition-all">
                <FaLinkedin size={18} />
              </div>
              <span className="font-medium text-[#002C2B] text-[18px]">
                Dr. Ozoda Hamidullaevna Yuldasheva
              </span>
            </a>

            {/* Telegram */}
            <a
              aria-label="telegram"
              href="#"
              className="flex items-center gap-3 group"
            >
              <div className="bg-[#1F4F4D] text-white rounded-full p-3 group-hover:bg-[#0088CC] transition-all">
                <FaTelegram size={18} />
              </div>
              <span className="font-medium text-[#002C2B] text-[18px]">
                Hamidullaevna Yuldasheva
              </span>
            </a>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="w-full lg:w-[60%]">
          <form onSubmit={handleSubmit}>
            {/* FORM GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {/* Name */}
              <div>
                <label className="block text-[18px] font-semibold text-[#002C2B] mb-2">
                  Your Name
                </label>
                <input
                  name="ism"
                  value={formData.ism}
                  onChange={handleInputChange}
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="w-full bg-[#F4F4F4] px-4 py-2.5 rounded-2xl border border-[#E5E5E5] focus:ring-2 focus:ring-[#26938A] outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-[18px] font-semibold text-[#002C2B] mb-2">
                  Email
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full bg-[#F4F4F4] px-4 py-2.5 rounded-2xl border border-[#E5E5E5] focus:ring-2 focus:ring-[#26938A] outline-none"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-[18px] font-semibold text-[#002C2B] mb-2">
                  Phone
                </label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  type="tel"
                  placeholder="Enter your phone"
                  className="w-full bg-[#F4F4F4] px-4 py-2.5 rounded-2xl border border-[#E5E5E5] focus:ring-2 focus:ring-[#26938A] outline-none"
                />
              </div>

              {/* Country */}
              <div>
                <label className="block text-[18px] font-semibold text-[#002C2B] mb-2">
                  Country
                </label>
                <input
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Enter your country"
                  className="w-full bg-[#F4F4F4] px-4 py-2.5 rounded-2xl border border-[#E5E5E5] focus:ring-2 focus:ring-[#26938A] outline-none"
                />
              </div>

              {/* Message - full width */}
              <div className="md:col-span-2">
                <label className="block text-[18px] font-semibold text-[#002C2B] mb-2">
                  Message
                </label>
                <textarea
                  name="xabar"
                  value={formData.xabar}
                  onChange={handleInputChange}
                  rows={6}
                  required
                  placeholder="Enter"
                  className="w-full bg-[#F4F4F4] px-4 py-2.5 rounded-2xl border border-[#E5E5E5] focus:ring-2 focus:ring-[#26938A] outline-none resize-none"
                />
              </div>
            </div>

            {/* Submit */}
            <div className="mt-8">
              <button
                type="submit"
                className="w-full cursor-pointer px-8 py-3.5 bg-[#1F4F4D] hover:bg-[#163f3e] text-white font-medium text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] rounded-[50px] transition-all focus:ring-2 focus:ring-[#26938A]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
