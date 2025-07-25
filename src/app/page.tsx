import Carousel from "@/components/layout/Carousel";
import Footer from "@/components/layout/Footer";
import GetInTouch from "@/components/layout/GetInTouch";
import Header from "@/components/layout/Header";
import RecentWorks from "@/components/layout/RecentWorks";

// Example: src/app/page.tsx (Home Page)
export default function Home() {
  return (
    <div className="w-full h-screen flex max-lg:flex-col max-sm:flex-col">
      {/* Carousel Container */}
      <div className="w-1/3 max-lg:w-full max-sm:w-full">
        <Carousel />
      </div>
      {/* Portfolio Content */}
      <div className="w-2/3 max-lg:w-full max-sm:w-full pt-32 max-sm:pt-8 pb-10 pl-18 max-sm:pl-6 pr-42 max-sm:pr-6 bg-[#fff] overflow-y-scroll max-lg:overflow-visible max-sm:overflow-visible">
        <Header />
        <RecentWorks />
        <GetInTouch />
      </div>
      <div className="hidden max-sm:block">
        <Footer />
      </div>
    </div>
  );
}
