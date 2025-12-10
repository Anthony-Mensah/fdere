import "./App.css";
import Footer from "./landing/footer";
import Hero from "./landing/hero";
import Navbar from "./landing/navbar";
import OrgStructure from "./landing/org-structure";
import Priority from "./landing/priority";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Priority />
      <OrgStructure />
      <Footer />
    </>
  );
}

export default App;
