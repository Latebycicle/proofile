const socials = [
  { icon: 'https://placehold.co/32x32/F7941C/fff?text=F', alt: 'Facebook' },
  { icon: 'https://placehold.co/32x32/F7941C/fff?text=T', alt: 'Twitter' },
  { icon: 'https://placehold.co/32x32/F7941C/fff?text=I', alt: 'Instagram' },
];

const CTAFooter = () => (
  <footer className="w-full py-16 px-4 md:px-16" style={{ background: '#222', borderRadius: '2.5rem' }}>
    <div className="max-w-7xl mx-auto flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center font-sans text-white">Ready to get your Digital ID?</h2>
      <p className="text-lg text-gray-300 mb-8 text-center font-sans max-w-xl">Sign up now and join thousands who trust Proofile for secure, digital identity management.</p>
      <button className="button px-8 py-4 shadow transition mb-10 text-lg">Get Started</button>
      <div className="w-full border-t border-gray-700 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo and Socials */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img src="https://placehold.co/48x48/F7941C/fff?text=ID" alt="Proofile Logo" className="rounded-2xl w-12 h-12" style={{ borderRadius: 14 }} />
          <div className="flex gap-4">
            {socials.map((s) => (
              <a href="#" key={s.alt} className="inline-block">
                <img src={s.icon} alt={s.alt} className="w-8 h-8 rounded-full" style={{ borderRadius: 14 }} />
              </a>
            ))}
          </div>
        </div>
        {/* Small Print */}
        <p className="text-xs text-gray-400 text-center md:text-right font-sans">&copy; {new Date().getFullYear()} Proofile.in. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default CTAFooter;
