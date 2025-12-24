import { useState } from "react";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialLinks from "@/components/SocialLinks";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefoonka",
    value: "+252 610 829 707",
    href: "tel:+252610829707",
  },
  {
    icon: Phone,
    label: "Telefoonka 2",
    value: "+252 619 079 910",
    href: "tel:+252619079910",
  },
  {
    icon: Mail,
    label: "Email",
    value: "madargadhle1@gmail.com",
    href: "mailto:madargadhle1@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Ila soo xiriir",
    href: "https://wa.link/ub7bb5",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mahadsanid!",
      description: "Farriintaada waa la helay. Waan kula soo xiriiri doonaa dhowaan.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-golden/5 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 text-sm font-medium bg-golden/10 border border-golden/30 rounded-full text-golden mb-6">
              Contact
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Ila Soo</span>{" "}
              <span className="text-gradient-golden">Xiriir</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Haddii aad hayso su'aal ama aad rabto inaad la shaqeyso, ila soo xiriir.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-card p-8 rounded-2xl">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Noo Dir Fariin
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Magacaaga
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-golden transition-colors"
                      placeholder="Geli magacaaga"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email-kaaga
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-golden transition-colors"
                      placeholder="Geli email-kaaga"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mawduuca
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-golden transition-colors"
                    placeholder="Mawduuca farriintaada"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Farriintaada
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-golden transition-colors resize-none"
                    placeholder="Qor farriintaada halkan..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-golden text-secondary-foreground font-semibold rounded-xl hover:bg-golden-light transition-all duration-300 golden-glow"
                >
                  <Send className="w-5 h-5" />
                  Dir Farriinta
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Xiriirka Tooska ah
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 p-4 glass-card rounded-xl hover:border-golden/50 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-golden/10 border border-golden/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <info.icon className="w-5 h-5 text-golden" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="text-foreground font-medium">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  Baraha Bulshada
                </h3>
                <SocialLinks />
              </div>

              {/* Map Placeholder */}
              <div className="glass-card p-8 rounded-2xl text-center">
                <MapPin className="w-12 h-12 text-golden mx-auto mb-4" />
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  Goobta
                </h3>
                <p className="text-muted-foreground">
                  Mogadishu, Somalia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
