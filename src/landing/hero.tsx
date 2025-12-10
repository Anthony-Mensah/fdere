const fderePoints = [
  "Fdere was founded in 2024 to build powerful, fair, and accountable AI systems.",
  "Our focus is to build fair, transparent, and accountable AI tech solutions.",
  "Our purpose is to build fair, transparent, and accountable tech solutions.",
];

const Hero = () => {
  return (
    <section className="container flex flex-col items-center py-10 md:py-20 gap-20">
      {/* trust, architectured */}
      <h1 className="hero-header text-center">Trust, Architected</h1>

      {/* second part */}
      <ul className="flex flex-col gap-10">
        {fderePoints.map((point, index) => (
          <li
            key={index}
            className={`${index != 0 && "text-muted"} hero-points`}
          >
            {point}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Hero;
