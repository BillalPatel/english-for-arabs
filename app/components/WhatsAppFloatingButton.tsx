import Image from "next/image";
import Link from "next/link";
import whatsAppIcon from "../../assets/whatsapp.svg";

export default function WhatsAppFloatingButton() {
  return (
    <Link
      href="https://wa.me/201144820185"
      className="fixed bottom-10 left-10 z-50"
      target="_blank"
    >
      <button className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 flex items-center justify-center">
        <Image src={whatsAppIcon} alt="WhatsApp Icon" />
      </button>
    </Link>
  );
}
