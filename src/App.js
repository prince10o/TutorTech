import React from "react";
import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { Expert } from "./components/Expert";
import { NewsLetter } from "./components/NewsLetter";
import { Plans } from "./components/Plans";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <Expert />
      <NewsLetter />
      <Plans />
      <Footer />
    </>
  );
};
