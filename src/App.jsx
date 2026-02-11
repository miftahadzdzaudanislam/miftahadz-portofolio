import NotFound from "@/component/NotFound";
import LayoutPage from "@/layout/Index";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import DetailPorject from "@/pages/DetailPorto";
import Home from "@/pages/Home";
import Project from "@/pages/Portofolios";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route element={<LayoutPage />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="projects">
            <Route index element={<Project />} />
            <Route path=":slug" element={<DetailPorject />} />
          </Route>

          <Route path="contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
