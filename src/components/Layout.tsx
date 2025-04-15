
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import BookAppointment from "./BookAppointment";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <BookAppointment />
      <Footer />
    </div>
  );
};

export default Layout;
