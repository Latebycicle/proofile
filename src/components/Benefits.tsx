const benefits = [
  {
    number: '01',
    heading: 'Security',
    desc: 'Protect your identity with advanced encryption.',
  },
  {
    number: '02',
    heading: 'Convenience',
    desc: 'Access services quickly and easily.',
  },
  {
    number: '03',
    heading: 'Privacy',
    desc: 'Your data stays in your control.',
  },
];

const Benefits = () => (
  <section className="w-full py-20 px-4 md:px-16">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 font-sans text-black">Benefits</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {benefits.map((b) => (
          <div
            key={b.heading}
            className="relative feature-card p-12 shadow-lg flex flex-col items-center justify-center min-h-[260px]"
            style={{ overflow: 'hidden' }}
          >
            <span
              className="absolute text-7xl md:text-8xl font-extrabold text-white select-none pointer-events-none"
              style={{ top: '24px', left: '32px', zIndex: 0, opacity: 0.18, lineHeight: 1 }}
            >
              {b.number}
            </span>
            <div className="relative z-10 flex flex-col items-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 font-sans text-black">{b.heading}</h3>
              <p className="text-lg font-sans text-center max-w-xs text-white">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Benefits;
