import { useState } from "react";
import { FaBriefcase } from "react-icons/fa";

// Configurable job listings
const jobListings = [
  {
    title: "Gen AI & ML Engineer (Mid-Level)",
    description: "Design, develop, and optimize generative AI models and machine learning algorithms to solve complex business challenges. Collaborate with data scientists and engineers to deploy AI-driven solutions at scale.",
  },
  {
    title: "Data Engineer (Mid-Level)",
    description: "Build and maintain scalable data pipelines and ETL processes. Optimize data workflows for real-time and batch processing, ensuring high performance and data quality across various platforms.",
  },
  {
    title: "AI Engineer",
    description: "Develop and implement AI models to enhance business solutions. Work on model training, optimization, and deployment for real-world applications.",
  },
  {
    title: "Data Analyst",
    description: "Analyze data trends and generate insights for business growth. Create reports and dashboards to support decision-making across teams.",
  },
  {
    title: "Cloud Solutions Architect",
    description: "Design scalable and secure cloud infrastructures. Collaborate with teams to optimize cloud performance, security, and cost efficiency.",
  },
];

export default function CareersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  return (
    <div className="min-h-screen text-gray-900 pt-20">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-[#09354a] text-white">
        <h1 className="text-5xl font-extrabold flex items-center">
          <FaBriefcase className="mr-3" /> Join Our Team at IMPARVISH
        </h1>
        <p className="mt-4 text-lg max-w-3xl">
          Explore exciting career opportunities and be a part of an innovative team driving AI, Data, and Cloud solutions.
        </p>
      </section>

      {/* Job Listings Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-[#09354a]">Open Positions</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobListings.map((job, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold">{job.title}</h3>
              <p className="mt-2 text-gray-700">{job.description}</p>
              <button
                className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium"
                onClick={openModal}
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Apply Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md">
            <h2 className="text-2xl font-bold text-[#09354a]">Apply for the Job</h2>
            <p className="mt-4 text-gray-700">
              Please send your resume to{" "}
              <a href="mailto:anekanttechnologies@gmail.com" className="text-blue-600 font-medium">
                anekanttechnologies@gmail.com
              </a>
            </p>
            <button
              className="mt-6 px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-medium"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold text-[#09354a]">Why Work With Us?</h2>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">At IMPARVISH, we believe that our people are the foundation of our success. We are committed to creating an environment where innovation thrives, learning never stops, and collaboration fuels progress. Here’s why you’ll love being a part of our team:</p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[{
            title: "Culture of Innovation 🚀",
            description: "We encourage bold ideas and creative problem-solving. Our teams work with cutting-edge technologies and industry-leading methodologies to drive meaningful change. Whether you're brainstorming new solutions or refining existing processes, your contributions will make a real impact."
          }, {
            title: "Continuous Learning & Growth 📚",
            description: "We invest in your professional development through mentorship programs, skill-building workshops, certifications, and access to the latest industry insights. Our culture promotes curiosity and empowers you to expand your expertise in a dynamic environment."
          }, {
            title: "Collaborative Work Environment 🤝",
            description: "Teamwork is at the heart of what we do. We embrace diverse perspectives and foster an inclusive workplace where everyone's voice is valued. Whether working cross-functionally or within specialized teams, you’ll be surrounded by passionate professionals who support and inspire each other."
          }, {
            title: "Meaningful Work & Impact 🌎",
            description: "Your work will contribute to impactful projects that solve real-world challenges. We take pride in creating solutions that make a difference—whether it's enhancing business efficiency, driving sustainability, or advancing industry standards."
          }, {
            title: "Work-Life Balance & Well-Being 💙",
            description: "We recognize the importance of flexibility and well-being. Our workplace policies support work-life balance, mental health, and personal development, ensuring you can thrive both professionally and personally."
          }, {
            title: "Career Advancement Opportunities 📈",
            description: "We believe in recognizing talent and promoting from within. Whether you're looking to advance in your current role or explore new career paths, we provide clear growth trajectories and leadership opportunities to help you reach your full potential."
          }, {
            title: "Competitive Compensation & Benefits 💰",
            description: "We offer a comprehensive benefits package that includes competitive salaries, performance-based bonuses, health and wellness programs, and other perks that support your overall well-being."
          }].map((item, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-lg text-left">
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}



/**import { FaBriefcase } from "react-icons/fa";

export default function CareersPage() {
  return (
    <div className="min-h-screen text-gray-900 pt-20">
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-[#09354a] text-white">
        <h1 className="text-5xl font-extrabold flex items-center">
          <FaBriefcase className="mr-3" />  Join Our Team at IMPARVISH
        </h1>
        <p className="mt-4 text-lg max-w-3xl">
          Explore exciting career opportunities and be a part of an innovative team driving AI, Data, and Cloud solutions.
        </p>
      </section>
      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-[#09354a]">Open Positions</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold">AI Engineer</h3>
            <p className="mt-2 text-gray-700">Develop and implement AI models to enhance business solutions.</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium">
              Apply Now
            </button>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold">Data Analyst</h3>
            <p className="mt-2 text-gray-700">Analyze data trends and generate insights for business growth.</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium">
              Apply Now
            </button>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold">Cloud Solutions Architect</h3>
            <p className="mt-2 text-gray-700">Design scalable and secure cloud infrastructures.</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium">
              Apply Now
            </button>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold text-[#09354a]">Why Work With Us?</h2>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">At IMPARVISH, we believe that our people are the foundation of our success. We are committed to creating an environment where innovation thrives, learning never stops, and collaboration fuels progress. Here’s why you’ll love being a part of our team:</p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[{
            title: "Culture of Innovation 🚀",
            description: "We encourage bold ideas and creative problem-solving. Our teams work with cutting-edge technologies and industry-leading methodologies to drive meaningful change. Whether you're brainstorming new solutions or refining existing processes, your contributions will make a real impact."
          }, {
            title: "Continuous Learning & Growth 📚",
            description: "We invest in your professional development through mentorship programs, skill-building workshops, certifications, and access to the latest industry insights. Our culture promotes curiosity and empowers you to expand your expertise in a dynamic environment."
          }, {
            title: "Collaborative Work Environment 🤝",
            description: "Teamwork is at the heart of what we do. We embrace diverse perspectives and foster an inclusive workplace where everyone's voice is valued. Whether working cross-functionally or within specialized teams, you’ll be surrounded by passionate professionals who support and inspire each other."
          }, {
            title: "Meaningful Work & Impact 🌎",
            description: "Your work will contribute to impactful projects that solve real-world challenges. We take pride in creating solutions that make a difference—whether it's enhancing business efficiency, driving sustainability, or advancing industry standards."
          }, {
            title: "Work-Life Balance & Well-Being 💙",
            description: "We recognize the importance of flexibility and well-being. Our workplace policies support work-life balance, mental health, and personal development, ensuring you can thrive both professionally and personally."
          }, {
            title: "Career Advancement Opportunities 📈",
            description: "We believe in recognizing talent and promoting from within. Whether you're looking to advance in your current role or explore new career paths, we provide clear growth trajectories and leadership opportunities to help you reach your full potential."
          }, {
            title: "Competitive Compensation & Benefits 💰",
            description: "We offer a comprehensive benefits package that includes competitive salaries, performance-based bonuses, health and wellness programs, and other perks that support your overall well-being."
          }].map((item, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-lg text-left">
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}**/

