const SERVICES = [
  {
    title: "Masaje Relajante",
    description:
      "Una experiencia de relajación profunda con aceites esenciales importados. Libera tensiones y restaura tu equilibrio interior.",
    duration: "60 min",
    price: "$85",
    icon: "✦",
  },
  {
    title: "Facial Revitalizante",
    description:
      "Tratamiento facial con productos de alta gama que hidratan, nutren y devuelven el brillo natural a tu piel.",
    duration: "75 min",
    price: "$110",
    icon: "◇",
  },
  {
    title: "Manicure & Pedicure",
    description:
      "Cuidado integral de manos y pies con las mejores marcas. Incluye exfoliación, hidratación y esmaltado de larga duración.",
    duration: "90 min",
    price: "$65",
    icon: "○",
  },
  {
    title: "Aromaterapia",
    description:
      "Sesión holística con velas aromáticas y esencias naturales que equilibran mente, cuerpo y espíritu en perfecta armonía.",
    duration: "45 min",
    price: "$55",
    icon: "◈",
  },
  {
    title: "Envoltura Corporal",
    description:
      "Tratamiento corporal completo con algas marinas y arcilla mineral que desintoxica y suaviza la piel profundamente.",
    duration: "90 min",
    price: "$130",
    icon: "◉",
  },
  {
    title: "Hidroterapia",
    description:
      "Ritual de agua termal con sales del Mar Muerto que alivian dolores musculares y regeneran la piel desde adentro.",
    duration: "60 min",
    price: "$95",
    icon: "◊",
  },
];

export function Card1() {
  return (
    <section id="servicios" className="py-28 bg-[#f0ebe4]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p
            className="text-[#c9a96e] text-xs tracking-[0.25em] uppercase mb-4"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            ✦ &nbsp; Lo que ofrecemos
          </p>
          <h2
            className="text-[#2c2422]"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
              fontWeight: 600,
            }}
          >
            Nuestros Servicios
          </h2>
          <div className="w-12 h-px bg-[#c9a96e] mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="bg-[#faf7f4] p-8 hover:bg-[#8b5e6b] transition-all duration-400 cursor-default"
            >
              <div className="flex items-start justify-between mb-5">
                <span className="text-[#c9a96e] text-2xl group-hover:text-[#e8d4b0] transition-colors">
                  {service.icon}
                </span>
                <span
                  className="text-[#c9a96e] text-xl font-display group-hover:text-white transition-colors"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {service.price}
                </span>
              </div>
              <h3
                className="text-[#2c2422] text-lg mb-3 group-hover:text-white transition-colors"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 600,
                }}
              >
                {service.title}
              </h3>
              <p
                className="text-[#7a706b] text-sm leading-relaxed mb-4 group-hover:text-white/75 transition-colors"
                style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
              >
                {service.description}
              </p>
              <div className="flex items-center gap-2 mt-auto">
                <div className="w-4 h-px bg-[#c9a96e] group-hover:bg-[#e8d4b0] transition-colors" />
                <span
                  className="text-[#c9a96e] text-xs tracking-widest uppercase group-hover:text-[#e8d4b0] transition-colors"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {service.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
