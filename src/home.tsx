import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import imgAI from "./img/aiservices.jpg";
import imgDataAnalytics from "./img/image-1000x600.jpg";
import imgCloudComputing from "./img/image-1000x600 (1).jpg";

const services = [
  {
    title: "Enterprise AI Solutions",
    description: "Automate processes, gain predictive insights, and enhance customer experiences with machine learning and AI-driven applications.",
    item1: "AI Strategy Consulting & AI Center of Excellence [AI COE]",
    item2: "AI & ML Platform",
    item3: "Customize AI/ML Solutions",
    item4: "Generative AI (GenAI) Solutions",
    item5: "ML Operationalization [MLOps]",
    item6: "Computer Vision & NLP solutions",
    item7: "Ethical AI Practices & Implementation",
    item8: "Synthetic Data Generation",
    image: imgAI,
  },
  {
    title: "Data Analytics & Engineering",
    description: "Think your 'Data-As-A-Product', Unlock valuable insights, improve decision-making, and build a strong data-driven foundation for your business.",
    item1: "Data Strategy & Consulting",
    item2: "Data Integration & ETL Pipelines",
    item3: "Data Lakes, Warehousing & Data Virtualization Solutions",
    item4: "Data Governance",
    item5: "Data Analytics",
    item6: "Data Catalog & Discovery",
    item7: "",
    item8: "",
    image: imgDataAnalytics,
  },
  {
    title: "Cloud Engineering",
    description: "Seamlessly transition to scalable and secure cloud solutions, optimizing costs and enhancing efficiency.",
    item1: "Cloud Migration Strategy & Consulting",
    item2: "Cloud Ops & Cloud Engineering",
    item3: "Data Lakes, Warehousing & Data Virtualization Solutions",
    item4: "Cost Analytics & Automation",
    item5: "Cloud Security & Governance",
    item6: "Data & ML Platform",
    item7: "",
    item8: "",
    image: imgCloudComputing,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen text-gray-900 pt-20 bg-[#373250]">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-purple-900 text-white">
        <h1 className="text-5xl font-extrabold">Empowering Your Enterprise with Future-Ready Innovations</h1>
        <p className="mt-4 text-lg max-w-2xl">
          At IMPARVISH, we are dedicated to leading the evolution of Artificial Intelligence (AI) and Machine Learning (ML).
        </p>
        <p className="mt-10 text-lg max-w-4xl">
          Our mission is to develop cutting-edge platforms that integrate AI/ML technologies, enabling autonomous operations across organizational processes and systems. With a relentless focus on transforming data into actionable intelligence, we empower businesses across industries to unlock the full potential of AI and ML.
        </p>
        <p className="mt-4 text-lg max-w-4xl">
           Backed by a team of experienced and passionate innovators, we strive for excellence and innovation, shaping a smarter, more connected world. At IMPARVISH, we are transforming enterprises with AI-driven intelligence and innovation.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 text-center">
        <div className="flex justify-center space-x-4">
          <Link to="/services/AI Services">
            <button style={{ backgroundColor: "#a8416a" }} className="text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-300">
              Learn More
            </button>
          </Link>
          
          <Link to="/contact">
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold border border-purple-600 hover:bg-purple-100 transition duration-300">
              Contact Us
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg max-h-[450px]">
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="h-[400px] w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Floating Sliding Text */}
              <motion.div
                initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="absolute right-0 top-0 w-2/3 h-full inset-0 bg-black/60 text-white flex flex-col justify-center items-start text-left p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
              >
                <h3 className="text-5xl font-semibold">{service.title}</h3>
                <p className="text-white text-2xl">{service.description}</p>

                {/* Bullet Point List */}
                <ul className="list-disc list-inside text-white space-y-2 text-xl">
                  {service.item1 && <li>{service.item1}</li>}
                  {service.item2 && <li>{service.item2}</li>}
                  {service.item3 && <li>{service.item3}</li>}
                  {service.item4 && <li>{service.item4}</li>}
                  {service.item5 && <li>{service.item5}</li>}
                  {service.item6 && <li>{service.item6}</li>}
                  {service.item7 && <li>{service.item7}</li>}
                  {service.item8 && <li>{service.item8}</li>}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
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




