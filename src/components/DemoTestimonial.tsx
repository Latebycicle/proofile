const testimonials = [
  {
    img: 'https://placehold.co/80x80/F7941C/fff?text=U1',
    name: 'Jane Doe',
    text: 'Mission Digital ID made verifying my identity effortless and secure!',
  },
  {
    img: 'https://placehold.co/80x80/F7941C/fff?text=U2',
    name: 'John Smith',
    text: 'Fast, easy, and private. Highly recommend!',
  },
  {
    img: 'https://placehold.co/80x80/F7941C/fff?text=U3',
    name: 'Priya Patel',
    text: 'Universal acceptance and instant support!',
  },
  {
    img: 'https://placehold.co/80x80/F7941C/fff?text=U4',
    name: 'Alex Lee',
    text: 'Secure and convenient for all my needs.',
  },
];

const DemoTestimonial = () => (
  <section className="section-bg w-full py-20 px-4 md:px-16">
    <div className="max-w-7xl mx-auto rounded-2xl p-12 shadow-lg">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
        <h2 className="text-4xl md:text-5xl font-bold font-sans text-center md:text-left">Demo & Testimonial</h2>
        <a href="#" className="text-primary font-bold text-lg underline">See all testimonials</a>
      </div>
      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        {testimonials.map((t) => (
          <div key={t.name} className="flex flex-col items-center">
            <img src={t.img} alt={t.name} className="w-20 h-20 mb-4 object-cover border-2 border-white" style={{ borderRadius: 14 }} />
            <div className="feature-card p-6 shadow-lg w-full flex flex-col items-center">
              <p className="text-base font-sans italic mb-2 text-center">“{t.text}”</p>
              <span className="font-bold text-white text-sm">— {t.name}</span>
            </div>
          </div>
        ))}
      </div>
      {/* Controls */}
      <div className="flex flex-col items-center gap-6">
        <button className="button px-8 py-4 shadow transition text-lg">Watch Demo</button>
        <div className="flex gap-4 mt-2">
          <button className="button w-12 h-12 flex items-center justify-center shadow text-white text-2xl font-bold">&#8592;</button>
          <button className="button w-12 h-12 flex items-center justify-center shadow text-white text-2xl font-bold">&#8594;</button>
        </div>
      </div>
    </div>
  </section>
);

export default DemoTestimonial;
