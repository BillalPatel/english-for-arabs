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
      <button className="w-8 h-8 rounded-full text-2xl flex items-center justify-center">
        <Image src={whatsAppIcon} alt="WhatsApp Icon" />
      </button>
    </Link>
  );
}
