import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-3 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-2">RDMB Rénovation</h3>
            <p className="text-sm opacity-80 mb-4">{t.footer.tagline}</p>
            <p className="text-sm opacity-70">{t.footer.description}</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">{t.footer.navigation}</h4>
            <nav className="space-y-2">
              <a href="#about" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">
                {t.nav.about}
              </a>
              <a href="#services" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">
                {t.nav.services}
              </a>
              <a href="#gallery" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">
                {t.nav.gallery}
              </a>
              <a href="#hours" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">
                {t.nav.hours}
              </a>
              <a href="#contact" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">
                {t.nav.contact}
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">{t.contact.label}</h4>
            <div className="space-y-2 text-sm opacity-80">
              <p>
                <a href="tel:+41782542348" className="hover:opacity-100 transition-opacity">
                  +41 78 254 23 48
                </a>
              </p>
              <p>
                <a href="mailto:info@rdmb.ch" className="hover:opacity-100 transition-opacity">
                  info@rdmb.ch
                </a>
              </p>
              <p>Rue du Mont d'Or 16</p>
              <p>1337 Vallorbe, CH</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-70">
            <p>&copy; {currentYear} RDMB Rénovation Sàrl. {t.footer.copyright}</p>
            <div className="mt-4 md:mt-0 space-x-4">
              <span>{t.nav.profession}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
