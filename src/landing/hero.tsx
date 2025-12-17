const fderePoints = [
  "Fdere was established in 2024 in response to rapid technological advancement and the need for systems that are not only powerful but fair, transparent, and accountable. Our founding vision is to create technologies that serve humanity and strengthen trust in digital ecosystems.",
  "Building fair, transparent, and accountable systems that people and organizations can trust.",
  "To influence how emerging technologies are built, governed, and trusted, shaping a future where technology enhances human decision-making, empowers organizations, and upholds ethical principles.",
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
