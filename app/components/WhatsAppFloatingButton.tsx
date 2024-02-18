import Image from "next/image";
import Link from "next/link";
import whatsAppIcon from "../../assets/whatsapp.svg";

export default function WhatsAppFloatingButton() {
  return (
    <Link
      href="https://wa.me/201141592852"
      className="fixed bottom-10 left-5 lg:left-10 z-40"
      target="_blank"
    >
      <button className="h-14 w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 flex items-center justify-center">
        <Image
          src={whatsAppIcon}
          alt="WhatsApp Icon"
          height={1000}
          width={1000}
        />
      </button>
    </Link>
  );
}
