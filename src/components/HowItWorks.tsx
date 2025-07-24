const steps = [
  {
    img: 'https://placehold.co/48x48/F7941C/fff?text=1',
    title: 'Register',
    desc: 'Register your identity securely.',
  },
  {
    img: 'https://placehold.co/48x48/F7941C/fff?text=2',
    title: 'Get Digital ID',
    desc: 'Receive your unique Digital ID.',
  },
  {
    img: 'https://placehold.co/48x48/F7941C/fff?text=3',
    title: 'Verify Anywhere',
    desc: 'Use your Digital ID for verification anywhere.',
  },
];

const HowItWorks = () => (
  <section className="section-bg w-full py-20 px-4 md:px-16">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sans">How It Works</h2>
        <p className="text-lg md:text-xl text-gray-700 font-sans max-w-2xl mx-auto">A simple, secure process to get your Proofile Digital ID. Placeholder for process description.</p>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Center: Large wide image */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80"
            alt="How It Works"
            className="w-full max-w-2xl h-auto object-cover"
            style={{ borderRadius: 14 }}
          />
        </div>
        {/* Right: Vertically stacked blocks */}
        <div className="flex-1 flex flex-col gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="feature-card p-8 flex items-center gap-6 shadow-lg"
              style={{ minWidth: 280 }}
            >
              <img
                src={step.img}
                alt={step.title}
                className="w-12 h-12 object-cover border-2 border-white"
                style={{ borderRadius: 14 }}
              />
              <div>
                <h3 className="text-xl font-bold mb-2 font-sans">{step.title}</h3>
                <p className="text-base font-sans">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
