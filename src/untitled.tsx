/**export default function HomePage() {
  return (
    <div className="min-h-screen text-gray-900 pt-20">
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-[#09354a] text-white">
        <h1 className="text-5xl font-extrabold">Unlock the Future with AI, Data, and Cloud Solutions</h1>
        <p className="mt-4 text-lg max-w-2xl">
          We empower businesses to leverage cutting-edge technologies for data-driven insights and scalable growth.
        </p>
      </section>
      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-[#09354a]">Our Expertise</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold">AI-Powered Solutions</h3>
            <p className="mt-2 text-gray-700">Automate processes, gain predictive insights, and enhance customer experiences.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold">Data Analytics & Engineering</h3>
            <p className="mt-2 text-gray-700">Uncover hidden patterns and trends with advanced analytics and a strong data foundation.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold">Cloud Computing</h3>
            <p className="mt-2 text-gray-700">Seamlessly transition to scalable and secure cloud solutions tailored to your needs.</p>
          </div>
        </div>
      </section>
    </div>
  );
}**/

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import imgAI from "./img/aiservices.jpg";
import imgDataAnalytics from "./img/dataservices.jpg";
import imgCloudComputing from "./img/aiservices.jpg";

export default function HomePage() {
  const services = [
    {
      title: "AI-Powered Solutions",
      description: "Automate processes, gain predictive insights, and enhance customer experiences.",
      image: imgAI,
    },
    {
      title: "Data Analytics & Engineering",
      description: "Unlock valuable insights, improve decision-making, and build a strong data-driven foundation.",
      image: imgAI,
    },
    {
      title: "Cloud Computing",
      description: "Seamlessly transition to scalable and secure cloud solutions, optimizing costs and enhancing efficiency.",
      image: imgAI
    },
  ];

  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.4 }
    );

    const sections = document.querySelectorAll(".service-section");
    sections.forEach((section, index) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="min-h-screen text-gray-900">
      {/* 🌟 Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-32 px-6 bg-gradient-to-r from-[#09354a] to-[#0d4560] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        ></div>
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl font-extrabold leading-tight">
            Transform Your Business with AI, Data, & Cloud
          </h1>
          <p className="mt-4 text-lg">
            Leverage intelligent solutions for smarter decisions, automation, and scalable growth.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block px-6 py-3 text-lg font-semibold bg-blue-500 text-[#09354a] rounded-lg hover:bg-blue-600 transition"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* 🚀 Services Section */}
      <section className="w-full">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-section relative w-full h-[300px] overflow-hidden"
          >
            {/* Background Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />

            {/* 📌 Floating Content on the Right (40% width) */}
            <div
              className={`absolute right-0 top-0 w-2/5 h-full bg-black/50 text-white flex flex-col justify-center p-6
              transform ${
                visibleSections.includes(index)
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-16"
              } transition-all duration-[6000ms] ease-in-out`}
            >
              <h3 className="text-3xl font-bold">{service.title}</h3>
              <p className="mt-3 text-lg">{service.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

/**export default function HomePage() {
  return (
    <div className="min-h-screen text-gray-900 pt-20">
      
      <section className="relative flex flex-col items-center justify-center text-center py-32 px-6 bg-gradient-to-r from-[#09354a] to-[#0d4560] text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}></div>
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl font-extrabold leading-tight">Transform Your Business with AI, Data, & Cloud</h1>
          <p className="mt-4 text-lg">
            Leverage intelligent solutions for smarter decisions, automation, and scalable growth.
          </p>
          <Link to="/contact" className="mt-6 inline-block px-6 py-3 text-lg font-semibold bg-blue-500 text-[#09354a] rounded-lg hover:bg-blue-600 transition">
            Get Started
          </Link>
        </div>
      </section>

      
      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-white">Our Expertise</h2>
        <p className="mt-2 text-lg text-white">Innovative solutions designed to help you succeed in the digital era.</p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { 
              title: "AI-Powered Solutions", 
              description: "Automate processes, gain predictive insights, and enhance customer experiences with machine learning and AI-driven applications.", 
              image: img_ai
            },
            { 
              title: "Data Analytics & Engineering", 
              description: "Unlock valuable insights, improve decision-making, and build a strong data-driven foundation for your business.", 
              image: "/images/data-analytics.jpg"
            },
            { 
              title: "Cloud Computing", 
              description: "Seamlessly transition to scalable and secure cloud solutions, optimizing costs and enhancing efficiency.", 
              image: "/images/cloud-computing.jpg"
            }
          ].map((service, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-lg text-left">
              <img src={service.image} alt={service.title} className="w-full h-40 object-cover rounded-md" />
              <h3 className="text-2xl font-semibold mt-4">{service.title}</h3>
              <p className="mt-2 text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      
      <section className="bg-[#09354a] text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold">Why Choose Us?</h2>
          <p className="mt-3 text-lg text-gray-300">
            We deliver cutting-edge technology solutions that drive growth, efficiency, and innovation.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Proven Expertise", description: "Years of experience in AI, data science, and cloud computing.", icon: "💡" },
              { title: "Tailored Solutions", description: "Custom strategies designed to fit your unique business needs.", icon: "⚙️" },
              { title: "End-to-End Support", description: "From consultation to implementation and beyond.", icon: "🚀" }
            ].map((item, index) => (
              <div key={index} className="p-6 bg-white text-[#09354a] shadow-lg rounded-lg text-center">
                <div className="text-5xl">{item.icon}</div>
                <h3 className="text-2xl font-semibold mt-4">{item.title}</h3>
                <p className="mt-2 text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-[#09354a]">What Our Clients Say</h2>
        <p className="mt-2 text-lg text-gray-700">Trusted by businesses worldwide to deliver excellence.</p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { name: "Sarah Thompson", feedback: "Our business transformed with AI automation, boosting productivity by 40%!", image: "/images/client1.jpg" },
            { name: "James Patel", feedback: "Their cloud solutions helped us scale effortlessly while reducing costs!", image: "/images/client2.jpg" }
          ].map((client, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-lg flex items-center">
              <img src={client.image} alt={client.name} className="w-16 h-16 rounded-full object-cover mr-4" />
              <div>
                <p className="text-gray-700 italic">"{client.feedback}"</p>
                <h4 className="text-lg font-semibold mt-2">{client.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}**/




