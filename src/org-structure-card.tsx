import { motion } from "framer-motion";
import { RiLinkedinBoxFill, RiTwitterXFill } from "react-icons/ri";
import React from "react";

type TOrgStructureCard = { image: string; name: string; position: string };

const OrgStructureCard: React.FC<TOrgStructureCard> = ({
  image,
  name,
  position,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="relative group w-[300px] h-[350px] rounded-[20px] overflow-hidden bg-muted shadow-xl cursor-pointer"
    >
      {/* Profile Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover md:group-hover:brightness-75 transition-all duration-300"
      />

      {/* Mobile Details - Always visible at bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 via-black/60 to-transparent p-4 md:hidden">
        <div className="text-center space-y-2">
          <h3 className="text-white text-lg font-semibold">{name}</h3>
          <p className="text-gray-300 text-sm">{position}</p>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-4 pt-2">
            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition duration-200"
            >
              <RiTwitterXFill className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition duration-200"
            >
              <RiLinkedinBoxFill className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Desktop Hover Details - Hidden on mobile */}
      <motion.div
        transition={{ duration: 0.25 }}
        className="hidden md:flex absolute inset-0 bg-black/60 backdrop-blur-sm rounded-[10px] flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
      >
        <motion.div
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="text-center space-y-2 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
        >
          <h3 className="text-white text-lg font-semibold">{name}</h3>
          <p className="text-gray-300 text-sm">{position}</p>
          {/* advisor info */}
          {position.includes("Advisor") && (
            <p>
              AI and data specialist with 7+ years’ experience delivering
              strategic analytics, data science solutions, and impactful AI
              initiatives across sectors.
            </p>
          )}

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-4 pt-2">
            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-white/30 transition hover:scale-110 duration-200"
            >
              <RiTwitterXFill className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-white/30 transition hover:scale-110 duration-200"
            >
              <RiLinkedinBoxFill className="w-5 h-5 text-white" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default OrgStructureCard;
