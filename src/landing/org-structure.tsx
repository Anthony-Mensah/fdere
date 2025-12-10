import { useEffect, useRef, useState } from "react";
import OrgStructureCard from "../org-structure-card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cofounders = [
  {
    image: "cofounders/patrick.jpg",
    name: "Som Patrick",
    position: "Founder & CEO",
  },
  {
    image: "cofounders/edmund.jpg",
    name: "Edmund Okyere",
    position: "Cofounder & Cybersecurity Team Lead",
  },
  {
    image: "cofounders/edwin.jpg",
    name: "Edwin Enchill",
    position: "Cofounder & Software Engineer",
  },
  {
    image: "cofounders/collins.jpg",
    name: "Korwuta Collins",
    position: "Cofounder & Head of IT Consulting",
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
// type TOrgStructureCard = { image: string; name: string; position: string };
// : React.FC<TOrgStructureCard>

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
    </section>
  );
};

export default OrgStructure;
