const stats = [
  {
    icon: '📝',
    title: 'Quick Sign-up',
    subtitle: 'Get started quickly',
  },
  {
    icon: '🎓',
    title: 'Student Verified',
    subtitle: 'Trusted academic credentials',
  },
  {
    icon: '🔗',
    title: 'Instant Connections',
    subtitle: 'Share your profile conveniently',
  },
];

const Hero = () => (
  <section className="w-full min-h-[60vh] px-8 py-16 rounded-2xl mb-8 flex flex-col md:flex-row items-center justify-between gap-12">
    {/* Left Column */}
    <div className="flex-1 md:basis-2/5 flex flex-col justify-center items-start max-w-lg">
      <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 font-sans">Mission Digital ID</h1>
      <p className="text-xl md:text-2xl mb-8 text-gray-700 font-sans text-left py-5">Empower your student journey with Mission Digital ID. Register on Proofile.in to receive a personalized QR code for your ID card—making your profile accessible, professional, and ready for networking anytime, anywhere. Make your first impression truly digital.</p>
      <button className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow hover:bg-orange-500 transition text-lg mb-8">Get Started</button>
      <div className="flex gap-6 w-full">
        {stats.map((stat) => (
          <div key={stat.title} className="flex flex-col items-center bg-white rounded-2xl shadow px-4 py-3 min-w-[90px]">
            <span className="text-3xl mb-1">{stat.icon}</span>
            <span className="text-lg font-semibold text-gray-700">{stat.title}</span>
            <span className="text-xs text-gray-500">{stat.subtitle}</span>
          </div>
        ))}
      </div>
    </div>
    {/* Right Column */}
    <div className="flex-1 md:basis-3/5 flex items-center justify-center w-full">
      <img
        src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
        alt="Digital ID Hero"
        className="w-full max-w-xl h-auto rounded-2xl shadow-lg object-cover"
      />
    </div>
  </section>
);

export default Hero;
