import { ReactNode } from "react";
import Footer from "../footer";
import Sidebar from "../sidebar/sidebar";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <>
      <div className="h-screen flex flex-row justify-start">
        <Sidebar />
        <div className="bg-primary flex-auto p-4 bg-[#f5f8fb]">
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
}
