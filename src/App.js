import "./App.css";
import React, { Suspense, lazy } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import useWindowSize from "./hooks/useWindowSize";
import Skeleton from "react-loading-skeleton";

const Projects = lazy(() => import("./components/Projects"));

function App() {
  const size = useWindowSize();
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Suspense fallback={<Skeleton count={5} />}>
        <Projects />
      </Suspense>
      <Contact />
      <Footer />
      {size.width > 600 && <Sidebar />}
    </>
  );
}

export default App;
