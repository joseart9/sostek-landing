import Carousel from "@/components/Carousel";
import Nosotros from "@/components/Nosotros";


export default function Home() {
  return (
    <div className="flex flex-col">
      <Carousel />
      <Nosotros />
    </div>
    
  );
}
