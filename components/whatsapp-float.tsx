import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { site } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <Link
      href={site.whatsappMain}
      target="_blank"
      rel="noreferrer"
      aria-label="Contacter Del Business sur WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(37,211,102,0.4)] transition hover:scale-105"
    >
      <MessageCircle className="h-7 w-7" />
    </Link>
  );
}
