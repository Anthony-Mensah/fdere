const links = [
  {
    label: "Company",
    href: "/",
  },
  {
    label: "Projects",
    href: "/",
  },
  {
    label: "Contact Us",
    href: "/",
  },
];

const Footer = () => {
  return (
    <section className="bg-accent h-20 md:h-[120px] flex items-center py-20">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4 md:gap-10">
        <a href="#">
          <img
            src="fdere-black.png"
            alt="fdere logo"
            className="h-[30px] w-[102px]"
          />
        </a>
        <ul className="flex gap-5 items-center">
          {links.map((link) => (
            <li
              key={link.label}
              className="text-base md:text-[20px] cursor-pointer"
            >
              {link.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Footer;
