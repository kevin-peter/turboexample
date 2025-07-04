import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Sidebar } from "../../components/Sidebar";

const BetdayLayout= ({ children }: { children: React.ReactNode }) => (
    <div className="bg-blue-500">
    <Header />
    <Sidebar />
    <main>{children}</main>
    <Footer />
  </div>
);

export default BetdayLayout;

