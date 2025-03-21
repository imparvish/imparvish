export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a192f] text-white pt-20">
      {/* Hero Section */}
      <section className="text-center py-20 px-6 bg-[#0a192f] text-white">
        <h1 className="text-5xl font-extrabold"><span className="text-yellow-300">At IMPARVISH</span></h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          We are Driving innovation through AI, Data, and Cloud solutions. We embrace a multi-perspective approach to solving complex challenges.
        </p>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center">Our Philosophy: Anekant</h2>
        <p className="mt-4 text-lg text-center">
          At <strong>IMPARVISH Technologies</strong>, we take inspiration from the Sanskrit word <strong>Anekant</strong>, which means “many-sidedness.” This philosophy drives us to think beyond binary and create versatile, innovative solutions for complex technological challenges.
        </p>
      </section>

      {/* How Anekant Relates to Technology */}
      <section className="py-16 px-6 bg-blue-500">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center">How Anekant Relates to Technology</h2>
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-2xl font-semibold">In Data and AI</h3>
              <p className="mt-2 text-lg">
                Traditional solutions focus on single points of insight. At <strong>IMPARVISH Technologies</strong>, we approach problems with a multi-dimensional perspective—combining data, intelligence, and analytics to uncover deeper, actionable insights for businesses.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">In Quantum Computing (Future-ready)</h3>
              <p className="mt-2 text-lg">
                Quantum computing goes beyond binary (0s and 1s), embracing quantum states that represent infinite possibilities. This aligns with our <strong>Anekant</strong> approach—solving problems that require parallel thinking and advanced technologies to unlock new opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center">Mission & Vision</h2>
        <p className="mt-4 text-lg text-center">
          Our mission is to deliver cutting-edge Data, AI & ML, and Quantum Computing solutions that empower businesses to innovate and thrive.
        </p>
      </section>
    </div>
  );
}
