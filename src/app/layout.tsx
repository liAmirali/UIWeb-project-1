import "./globals.css";
import Footer from "@/components/layout/footer/Footer";
import WholeHeader from "@/components/layout/header/WholeHeader";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <WholeHeader />
      <Outlet />
      <Footer />
    </>
  );
}
