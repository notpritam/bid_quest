import FeaturedAuction from "@/components/landing/FeaturedAuction";
import FeaturedCategory from "@/components/landing/FeaturedCategory";
import Hero from "@/components/landing/Hero";
import NewArrival from "@/components/landing/NewArrival";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <FeaturedAuction />
      <NewArrival />
      <FeaturedCategory />
    </main>
  );
}
