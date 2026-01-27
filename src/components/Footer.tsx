import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    shop: [
      { name: "New Arrivals", href: "#new" },
      { name: "Rings", href: "#rings" },
      { name: "Necklaces", href: "#necklaces" },
      { name: "Earrings", href: "#earrings" },
      { name: "Bracelets", href: "#bracelets" },
    ],
    company: [
      { name: "Our Story", href: "#about" },
      { name: "Craftsmanship", href: "#craft" },
      { name: "Sustainability", href: "#sustainability" },
      { name: "Careers", href: "#careers" },
      { name: "Press", href: "#press" },
    ],
    support: [
      { name: "Contact Us", href: "#contact" },
      { name: "FAQs", href: "#faq" },
      { name: "Shipping", href: "#shipping" },
      { name: "Returns", href: "#returns" },
      { name: "Care Guide", href: "#care" },
    ],
  };

  return (
    <footer className="bg-foreground text-background py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-3xl tracking-widest mb-6">LUMIÈRE</h3>
            <p className="text-background/70 mb-8 max-w-sm leading-relaxed">
              Timeless elegance, crafted with passion. Each piece tells a story of sophistication and grace.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-sm tracking-widest mb-6">SHOP</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm tracking-widest mb-6">COMPANY</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-sm tracking-widest mb-6">SUPPORT</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © 2026 Lumière. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-background/60 hover:text-background transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-background/60 hover:text-background transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-background/60 hover:text-background transition-colors">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
