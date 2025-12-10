import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center py-6 container mx-auto px-4 relative">
      {/*       {/* Mobile Menu Button (moved to the right) */}
      <div className="md:hidden order-3">
        <button
          className="p-2 rounded-xl bg-muted/40 backdrop-blur-sm"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <div className="items-center gap-5 hidden md:flex">
        <p className=" nav-text">Company </p>
        <p className=" nav-text">Projects</p>
      </div>
      {/* fdere logo */}
      <img src="fdere.png" alt="fdere logo" className="h-[30px] w-[102px]" />
      {/* contact us */} 
      <p className="hidden md:flex nav-text">Contact Us</p>
      {/* Mobile Menu Drawer */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-b-2xl py-6 px-4 flex flex-col space-y-4 text-center md:hidden animate-in fade-in slide-in-from-top-2">
          <p className="nav-text py-2 border-b" onClick={() => setOpen(false)}>
            Company
          </p>
          <p className="nav-text py-2 border-b" onClick={() => setOpen(false)}>
            Projects
          </p>
          <p className="nav-text py-2" onClick={() => setOpen(false)}>
            Contact Us
          </p>
        </div>
      )}
    </nav>
  );
}
