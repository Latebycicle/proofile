const Navbar = () => (
  <nav className="w-full sticky top-0 z-50 bg-white flex items-center justify-between px-8 py-4 font-sans" style={{ minHeight: 72 }}>
    <div className="flex items-center gap-3">
      <img src="https://placehold.co/40x40/F7941C/fff?text=ID" alt="Logo" className="rounded-2xl w-10 h-10" style={{ borderRadius: 14 }} />
      <span className="font-bold text-2xl tracking-tight text-black">Mission Digital ID</span>
    </div>
    <button className="bg-[#F7941C] text-white px-8 py-4 rounded-full font-bold shadow hover:bg-orange-500 transition text-lg" style={{ borderRadius: 9999 }}>
      Get your ID
    </button>
  </nav>
);

export default Navbar;
