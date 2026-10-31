import Link from "next/link";

import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-white">
      <div className="container-site grid gap-10 py-12 md:grid-cols-3">
        <div>
          <Link href="/" className="font-display text-3xl font-bold text-primary">Del Business</Link>
          <p className="mt-4 max-w-xs text-sm text-slate-600">
            Accessoires authentiques, conseil commercial et solutions de vente pour les entrepreneurs au Kasaï-Centrale.
          </p>
        </div>

        <div>
          <h3 className="font-display text-2xl font-bold text-primary">Navigation</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li><Link href="/boutique">Boutique</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/formation">Formation</Link></li>
            <li><Link href="/partenariat">Partenariat</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-2xl font-bold text-primary">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li>{site.phoneDisplay}</li>
            <li>{site.email}</li>
            <li>{site.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Del Business. Tous droits réservés.
      </div>
    </footer>
  );
}
