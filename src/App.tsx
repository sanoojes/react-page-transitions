import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";

const App = () => {
  const location = useLocation();
  return (
    <main className='bg-[#6aa082] text-neutral-100 h-screen overflow-hidden items-center'>
      <NavBar />
      <Routes location={location}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </main>
  );
};

export default App;

