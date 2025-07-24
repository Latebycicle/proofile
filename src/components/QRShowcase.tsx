const features = [
  {
    img: 'https://placehold.co/40x40/F7941C/fff?text=1',
    title: 'Instant Verification',
    desc: 'Scan and verify your identity in seconds.',
  },
  {
    img: 'https://placehold.co/40x40/F7941C/fff?text=2',
    title: 'Secure Access',
    desc: 'Your data is protected and encrypted.',
  },
  {
    img: 'https://placehold.co/40x40/F7941C/fff?text=3',
    title: 'Universal Acceptance',
    desc: 'Works anywhere digital IDs are supported.',
  },
];

const QRShowcase = () => (
  <section className="w-full py-20 px-4 md:px-16">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 font-sans text-black">QR Showcase</h2>
      <div className="flex flex-col md:flex-row items-center gap-12 justify-center">
        {/* QR Code Image */}
        <div className="flex-1 flex justify-center">
          <div className="bg-white rounded-[2.5rem] shadow-lg flex items-center justify-center w-80 h-80">
            <img
              src="https://placehold.co/220x220/222/fff?text=QR"
              alt="QR Code"
              className="w-56 h-56 object-cover"
              style={{ borderRadius: 14 }}
            />
          </div>
        </div>
        {/* Feature Cards */}
        <div className="flex-1 flex flex-col gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="feature-card p-8 flex items-center gap-6 shadow-lg min-w-[260px]"
            >
              <img
                src={f.img}
                alt={f.title}
                className="w-12 h-12 object-cover border-2 border-white"
                style={{ borderRadius: 14 }}
              />
              <div>
                <h3 className="text-xl font-bold mb-2 font-sans text-black">{f.title}</h3>
                <p className="text-base font-sans text-white">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default QRShowcase;
