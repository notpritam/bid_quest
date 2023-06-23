import "./globals.css";
import { Inter } from "next/font/google";
import ClientProviderComponent from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BidQuest",
  description: "Where Bids Turn into Wins. Your Gateway to Amazing Deals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientProviderComponent>{children}</ClientProviderComponent>
      </body>
    </html>
  );
}
