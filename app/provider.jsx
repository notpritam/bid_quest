"use client";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";

export default function ClientProviderComponent({ children }) {
  return (
    <>
      <ThemeProvider attribute="class">
        <Header />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
}
