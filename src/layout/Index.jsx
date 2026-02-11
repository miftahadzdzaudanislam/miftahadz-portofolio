import Footer from "@/component/Footer";
import Navbar from "@/component/Header";
import { Outlet } from "react-router-dom";

export default function LayoutPage() {
  return (
    <>
      <Navbar />
      <div className="hero bg-neutral min-h-screen relative overflow-hidden pt-28 md:pt-32">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
