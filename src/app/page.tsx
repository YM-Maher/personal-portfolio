import Carousel from "@/components/layout/Carousel";
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
      <div className="w-2/3 py-32 px-14 bg-[#fff] overflow-y-scroll">
        <Header />
        <RecentWorks />
      </div>
    </div>
  );
}
