import SocialLinks from "./SocialLinks";
import ContactInfo from "./ContactInfo";

const Footer = () => {
  return (
    <footer className="relative bg-card py-16 border-t border-border">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Name & Tagline */}
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
            <span className="text-foreground">Madar</span>{" "}
            <span className="text-gradient-golden">Mahamud</span>
          </h2>
          <p className="text-sm text-muted-foreground">C Eng Madar</p>
          <p className="text-muted-foreground mt-4">
            Technology | Management | Asset Management | Digitalization | Modern Solutions
          </p>
        </div>

        {/* Social Links */}
        <div className="mb-10">
          <SocialLinks />
        </div>

        {/* Contact Info */}
        <div className="mb-10">
          <ContactInfo />
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © 2025 Madar Mahamud. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
