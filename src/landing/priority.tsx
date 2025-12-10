const priorityPoints = [
  "Responsible AI Research & Auditing",
  "AI Product Development & Engineering",
  "Cybersecurity, Privacy & Compliance",
  "IT Consulting & Systems Integration",
  "Cybersecurity, Privacy & Compliance",
  "Education, Training & Engagement",
];

const Priority = () => {
  return (
    <section className="container flex flex-col items-center gap-5 lg:gap-10 lg:flex-row lg:justify-center lg:items-start py-10 lg:py-20">
      {/* header */}
      <div className="flex flex-col items-center lg:items-start gap-4">
        <h1 className="header lg:w-[430px]">
          Priority Areas Guiding Our Work
        </h1>
        <p className="text-muted text-[16px] tracking-[0%]">
          Advancing ideas into real-world impact.
        </p>
      </div>
      {/* priority info */}
      <ul
        className="
  p-6 flex flex-col gap-4
  w-full sm:w-[420px] md:w-[520px]
  rounded-2xl border border-accent/40 bg-accent/5
  shadow-sm
"
      >
        {priorityPoints.map((point, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-xl md:text-2xl"
          >
            <span className="mt-1 h-3 w-3 rounded-full bg-accent"></span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Priority;
