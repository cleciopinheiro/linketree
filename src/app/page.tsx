import Image from "next/image";
import { GrCatalog } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen">
      <div className="flex flex-col gap-8 px-12">
        <Image src="/logomarca.png" alt="image" width={340} height={340} />
        <div className="flex flex-col gap-4">
          <a href="https://wa.me/5521965692272" target="_blank" className="flex py-3 px-6 bg-blue-800 gap-4 items-center justify-center text-white rounded-lg">
            <FaWhatsapp size={32} />
            WHATSAPP 1
          </a>

          <a href="https://wa.me/5521996684256" target="_blank" className="flex py-3 px-6 bg-blue-800 gap-4 items-center justify-center text-white rounded-lg">
            <FaWhatsapp size={32} />
            WHATSAPP 2
          </a>
          
          <a href="https://drive.google.com/file/d/1KjrNe9qNVqdcwh7p7XALkihxA3VZHpe0/view" target="_blank" className="flex py-3 px-6 bg-red-600 gap-4 items-center justify-center text-white rounded-lg">
            <GrCatalog size={30} />
            CATÁLOGO
          </a>
        </div>
      </div>
    </main>
  );
}
