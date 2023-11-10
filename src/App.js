
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Sidebar from './components/Sidebar';
import useWindowSize from './hooks/useWindowSize';
function App() {
  const size = useWindowSize();
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      {size.width > 600 && <Sidebar />}
    </>
  );
}

export default App;
