import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { buildProductWhatsAppLink } from "@/lib/site";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute left-4 top-4 flex gap-2">
          <Badge>{product.badge}</Badge>
          <Badge className="bg-primary/5 text-primary">Authentique</Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">{product.categoryLabel}</span>
          <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-emerald-700">
            Garantie
          </span>
        </div>

        <h3 className="font-display text-2xl font-bold leading-snug text-primary">{product.title}</h3>
        <p className="mt-3 text-sm font-medium text-accent">{product.tagline}</p>
        <p className="mt-3 text-sm leading-6 text-slate-600">{product.shortDescription}</p>

        <div className="mt-auto flex gap-3 pt-5">
          <Link href={`/boutique/${product.slug}`} className="flex-1">
            <Button variant="outline" className="w-full">Voir le produit</Button>
          </Link>
          <a href={buildProductWhatsAppLink(product.title)} target="_blank" rel="noreferrer" className="flex-1">
            <Button variant="accent" className="w-full">Commander</Button>
          </a>
        </div>
      </div>
    </article>
  );
}
