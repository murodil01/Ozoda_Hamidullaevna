import { FaLinkedin, FaTelegram } from "react-icons/fa6";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
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
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("country", formData.country);
    data.append("message", formData.message);

    try {
      const response = await fetch("https://formspree.io/f/mqavzzyw", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        toast.success("Successfully sent!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          country: "",
          message: "",
        });
      } else {
        toast.error("An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("⚠️ Could not connect to the server.");
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

          <div className="flex flex-col gap-5 mt-5 md:mt-25">
            {/* Email */}
            <div className="flex items-center gap-3">
              <a
                aria-label="email"
                href="mailto:dr.ozodayuldasheva@gmail.com"
                target="_blank"
                className="bg-[#1F4F4D] text-white rounded-full p-3 hover:bg-[#1877F2] transition-all"
              >
                <MdEmail size={18} />
              </a>
              <a
                href="mailto:dr.ozodayuldasheva@gmail.com"
                className="font-medium text-[#002C2B] text-[18px] hover:underline"
              >
                dr.ozodayuldasheva@gmail.com
              </a>
            </div>

            {/* Instagram */}
            <div className="flex items-center gap-3">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/accounts/login/?next=%2Fdr.ozoda_yuldasheva%2F&source=omni_redirect"
                aria-label="instagram"
                className="bg-[#1F4F4D] text-white rounded-full p-3 hover:bg-[#E1306C] transition-all"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://www.instagram.com/accounts/login/?next=%2Fdr.ozoda_yuldasheva%2F&source=omni_redirect"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#002C2B] text-[18px] hover:underline"
              >
                dr.ozoda_yuldasheva
              </a>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/dr-ozoda-yuldasheva/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="linkedin"
                className="bg-[#1F4F4D] text-white rounded-full p-3 hover:bg-[#0A66C2] transition-all"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/dr-ozoda-yuldasheva/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#002C2B] text-[18px] hover:underline"
              >
                Dr. Ozoda Hamidullaevna Yuldasheva
              </a>
            </div>

            {/* Telegram */}
            <div className="flex items-center gap-3">
              <a
                href="https://t.me/FOSNAASH/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="telegram"
                className="bg-[#1F4F4D] text-white rounded-full p-3 hover:bg-[#0088CC] transition-all"
              >
                <FaTelegram size={18} />
              </a>
              <a
                href="https://t.me/FOSNAASH/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#002C2B] text-[18px] hover:underline"
              >
                Hamidullaevna Yuldasheva
              </a>
            </div>
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
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  type="text"
                  required
                  placeholder="Enter your full name."
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
                  placeholder="Enter your phone number"
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
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  required
                  placeholder="Enter your message"
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
