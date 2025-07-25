import Carousel from "@/components/layout/Carousel";
import GetInTouch from "@/components/layout/GetInTouch";
import Header from "@/components/layout/Header";
import RecentWorks from "@/components/layout/RecentWorks";

// Example: src/app/page.tsx (Home Page)
export default function Home() {
  return (
    <div className="w-full h-screen flex">
      {/* Carousel Container */}
      <div className="w-1/3">
        <Carousel />
      </div>
      {/* Portfolio Content */}
      <div className="w-2/3 pt-32 pb-10 pl-18 pr-42 bg-[#fff] overflow-y-scroll">
        <Header />
        <RecentWorks />
        <GetInTouch />
      </div>
    </div>
  );
}
