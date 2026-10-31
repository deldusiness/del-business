"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/boutique", label: "Boutique" },
  { href: "/services", label: "Services" },
  { href: "/formation", label: "Formation" },
  { href: "/partenariat", label: "Partenariat" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-lg">
      <div className="container-site flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Accueil Del Business">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-lg font-bold text-white shadow-soft">
            D
          </div>
          <div>
            <p className="font-display text-2xl font-bold text-primary">Del Business</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition hover:text-primary",
                pathname === item.href ? "text-primary" : "text-slate-600"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/boutique" className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-primary">
            <ShoppingBag className="h-4 w-4" />
            Boutique
          </Link>
          <a href={site.whatsappMain} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
            <Button size="sm" variant="accent">Commander</Button>
          </a>
        </div>

        <div className="lg:hidden">
          <Button variant="ghost" size="icon" aria-label="Ouvrir le menu" onClick={() => setOpen((value) => !value)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="container-site flex flex-col gap-2 py-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition",
                  pathname === item.href ? "bg-slate-100 text-primary" : "text-slate-700 hover:bg-slate-50"
                )}
              >
                {item.label}
              </Link>
            ))}
            <a href={site.whatsappMain} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
              <Button className="mt-2 w-full" variant="accent">Commander</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
