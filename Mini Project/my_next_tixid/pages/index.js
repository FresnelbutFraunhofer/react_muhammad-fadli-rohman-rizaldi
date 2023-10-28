// import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/component/organisms/Navbar/Navbar";
import MainBanner from "@/component/organisms/MainBanner/MainBanner";
import TransactionStep from "@/component/organisms/TransactionStep/transaction";
import ShowingNow from "@/component/organisms/ShowingNow/showfilm";
import Reached from "@/component/organisms/Reached/Reached";
import AboutUs from "@/component/organisms/Story/AboutUs";
import OurPartner from "@/component/organisms/Partners/OurPartner";
import Footer from "@/component/organisms/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <ShowingNow />
      <Reached />
      <AboutUs />
      <OurPartner />
      <Footer />
    </>
  );
}
