
import Link from "next/link";
import { Facebook, Linkedin, Twitter, Instagram, Youtube, Rss, Mail, Phone } from "lucide-react";
import { SITE_NAME } from "@/lib/constants";

const socialLinks = [
  { href: "#", icon: Facebook, label: "Facebook" },
  { href: "#", icon: Linkedin, label: "LinkedIn" },
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "#", icon: Instagram, label: "Instagram" },
  { href: "#", icon: Youtube, label: "YouTube" },
];

const contactLinks = [
   { href: "mailto:info@synialab.com", icon: Mail, label: "info@synialab.com" },
   { href: "tel:+1234567890", icon: Phone, label: "+1 234 567 890" }, // Ejemplo, ajustar número
   { href: "/blog/rss.xml", icon: Rss, label: "Blog RSS" },
];

export function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-foreground">{SITE_NAME}</h3>
            <p className="mt-2 text-sm">
              Tecnología y Conocimiento que Transforman.
            </p>
             <div className="mt-6 flex space-x-4">
              {socialLinks.map((social) => (
                <Link key={social.label} href={social.href} className="text-muted-foreground hover:text-primary transition-colors" aria-label={social.label}>
                  <social.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Enlaces Rápidos</h4>
              <ul className="mt-4 space-y-2">
                <li><Link href="/about" className="hover:text-primary transition-colors">Quiénes somos</Link></li>
                <li><Link href="/services" className="hover:text-primary transition-colors">Servicios</Link></li>
                <li><Link href="/courses" className="hover:text-primary transition-colors">Cursos</Link></li>
                <li><Link href="/contact" className="hover:text-primary transition-colors">Contacto</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Recursos</h4>
              <ul className="mt-4 space-y-2">
                <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                <li><Link href="/portfolio" className="hover:text-primary transition-colors">Portafolio</Link></li>
                <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
                <li><Link href="/terms" className="hover:text-primary transition-colors">Términos</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Contacto</h4>
              <ul className="mt-4 space-y-2">
                {contactLinks.map((contact) => (
                     <li key={contact.label} className="flex items-center">
                        <contact.icon className="h-4 w-4 mr-2 shrink-0 text-primary" />
                        <Link href={contact.href} className="hover:text-primary transition-colors text-sm">{contact.label}</Link>
                    </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} {SITE_NAME}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
