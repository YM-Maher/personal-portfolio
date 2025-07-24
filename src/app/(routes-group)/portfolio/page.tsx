import Carousel from "@/components/layout/Carousel";
import Header from "@/components/layout/Header";

// Example: src/app/page.tsx (Home Page)
export default function Dashboard() {
  return (
    <div className="w-full flex">
      {/* Carousel Container */}
      <div className="w-1/3">
        <Carousel />
      </div>
      {/* Portfolio Content */}
      <div className="w-2/3 py-32 px-14 bg-[#fff]">
        <Header />
      </div>
    </div>
  );
}
