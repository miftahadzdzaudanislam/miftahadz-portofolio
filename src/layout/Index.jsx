import Footer from "@/component/Footer";
import Navbar from "@/component/Header";
import { Outlet } from "react-router-dom";

export default function LayoutPage() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
