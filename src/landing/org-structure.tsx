import { useEffect, useRef, useState } from "react";
import OrgStructureCard from "../org-structure-card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const cofounders = [
  {
    image: "cofounders/patrick.jpg",
    name: "Som Patrick",
    position: "Founder & CEO",
  },
  {
    image: "cofounders/collins.jpg",
    name: "Korwuta Collins",
    position: "Cofounder & Head of IT Consulting",
  },
  {
    image: "cofounders/edmund.jpg",
    name: "Edmund Okyere",
    position: "Cofounder & Cybersecurity Team Lead",
  },
  {
    image: "cofounders/edwin.jpg",
    name: "Edwin Enchill",
    position: "Cofounder & Technical lead - Web operations and security.",
  },
  {
    image: "cofounders/saint.jpg",
    name: "Anthony Mensah",
    position: "Cofounder & Lead Engineer",
  },
  {
    image: "cofounders/advisor.jpg",
    name: "Derek Degbe",
    position: "Strategic and Techincal Advisor",
  },
];

const OrgStructure = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  const checkOverflow = () => {
    const el = scrollRef.current;
    if (!el) return;
    setIsOverflowing(el.scrollWidth > el.clientWidth);
  };

  useEffect(() => {
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="flex flex-col items-center gap-20 py-10">
      <h1 className="header text-center">Organisational Structure</h1>
      <div className="w-full flex justify-center relative">
        {/* LEFT BUTTON */}
        {isOverflowing && (
          <button
            onClick={scrollLeft}
            className="
            hidden md:flex
            absolute left-3 top-1/2 -translate-y-1/2
            w-11 h-11 rounded-full
            bg-primary text-white
            shadow-lg backdrop-blur
            hover:shadow-xl hover:scale-105
            transition-all
            items-center justify-center
            z-20
          "
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* RIGHT BUTTON */}
        {isOverflowing && (
          <button
            onClick={scrollRight}
            className="
            hidden md:flex
            absolute right-3 top-1/2 -translate-y-1/2
            w-11 h-11 rounded-full
            bg-primary text-white
            shadow-lg backdrop-blur
            hover:shadow-xl hover:scale-105
            transition-all
            items-center justify-center
            z-20
          "
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* SCROLL AREA */}
        <div
          ref={scrollRef}
          id="orgScroll"
          className="
          grid sm:grid-cols-2
          md:flex md:flex-row md:overflow-x-auto
          md:snap-x md:snap-mandatory
          scrollbar-hide gap-5 px-2
          scroll-smooth
        "
        >
          {cofounders.map((founder, id) => (
            <div key={id} className="shrink-0 snap-start">
              <OrgStructureCard {...founder} />
            </div>
          ))}
        </div>
      </div>

      {/* Styled Subtext */}
      <div className="relative max-w-4xl mx-auto px-6">
        <div className="relative bg-linear-to-r from-gray-50 via-white to-gray-50 border-l-4 border-primary rounded-lg p-8 md:p-10 shadow-lg">
          {/* Quote Icon - Top Left */}
          <FaQuoteLeft className="absolute top-4 left-4 text-primary/20 text-4xl md:text-5xl" />

          {/* Quote Icon - Bottom Right */}
          <FaQuoteRight className="absolute bottom-4 right-4 text-primary/20 text-4xl md:text-5xl" />

          {/* Text Content */}
          <p className="text-center text-lg md:text-xl text-foreground font-medium leading-relaxed italic relative z-10 px-8 text-black">
            We are innovators, engineers, and technologists shaping technology
            that is fair, transparent, and accountable.
          </p>

          {/* Decorative Line */}
          <div className="flex items-center justify-center mt-6">
            <div className="h-1 w-16 bg-primary rounded-full"></div>
          </div>
        </div>

        {/* Shadow Effect */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent blur-xl -z-10"></div>
      </div>
    </section>
  );
};

export default OrgStructure;
