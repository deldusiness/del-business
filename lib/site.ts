export const site = {
  name: "Del Business",
  description:
    "Boutique d'accessoires authentiques à Kananga, Kasaï-Centrale, RDC. Livraisons rapides, conseils sur mesure et formations commerciales.",
  url: "https://delbusiness.vercel.app",
  email: "delbusiness83@gmail.com",
  phoneDisplay: "+243 97 543 1256",
  phoneRaw: "+243975431256",
  whatsappMain: "https://wa.me/message/73RMKK5MA3MXC1",
  whatsappProductBase: "https://wa.me/243975431256?text=",
  whatsappLabel: "WhatsApp",
  address: "Kananga, Kasaï-Centrale, RDC",
};

export function buildWhatsAppLink(content: string) {
  return `${site.whatsappProductBase}${encodeURIComponent(content)}`;
}

export function buildWhatsAppCheckout(items: string[]) {
  const text = `Bonjour Del Business, je souhaite commander les articles suivants :\n${items
    .map((item, index) => `${index + 1}. ${item}`)
    .join("\n")}\nMerci de confirmer la disponibilité et le délai de livraison.`;

  return buildWhatsAppLink(text);
}

export function buildProductWhatsAppLink(productName: string) {
  return buildWhatsAppLink(
    `Bonjour Del Business, je souhaite commander le produit suivant : ${productName}. Merci de me confirmer la disponibilité.`
  );
}
