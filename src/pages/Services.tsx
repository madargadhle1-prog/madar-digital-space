import { Monitor, Settings, BarChart3, Lightbulb, Users, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    icon: Monitor,
    title: "Technology Solutions",
    titleSo: "Xalka Technology-ga",
    description: "Waxaan bixinaa xalal technology ah oo casri ah oo ka caawiya shirkadaha inay horumaraan.",
    features: ["Software Development", "IT Infrastructure", "Cloud Solutions"],
  },
  {
    icon: Settings,
    title: "Digital Transformation",
    titleSo: "Isbeddelka Dhijitaalka",
    description: "U beddelka habab hore loo sameynayay kuwo dhijitaal ah oo wax ku ool ah.",
    features: ["Process Automation", "Digital Strategy", "System Integration"],
  },
  {
    icon: BarChart3,
    title: "Asset Management",
    titleSo: "Maareynta Hantida",
    description: "Maamulka iyo ilaalinta hantida si wax ku ool ah oo dhaqaale ah.",
    features: ["Portfolio Management", "Risk Assessment", "Performance Tracking"],
  },
  {
    icon: Lightbulb,
    title: "Strategic Planning",
    titleSo: "Qorshaha Istiraatiijiga",
    description: "Qorshaynta mustaqbalka shirkadaha iyo barnaamijyada horumarka.",
    features: ["Business Strategy", "Market Analysis", "Growth Planning"],
  },
  {
    icon: Users,
    title: "Team Leadership",
    titleSo: "Hogaaminta Kooxda",
    description: "Hoggaaminta iyo tababarka kooxaha si ay u gaaraan hadafkooda.",
    features: ["Team Building", "Training Programs", "Performance Management"],
  },
  {
    icon: Zap,
    title: "Modern Solutions",
    titleSo: "Xalalka Casriga",
    description: "Xalal cusub oo la socda isbeddelada technology-ga dunida.",
    features: ["Innovation Consulting", "Tech Advisory", "Modernization"],
  },
];

const Services = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-somali-blue/5 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 text-sm font-medium bg-golden/10 border border-golden/30 rounded-full text-golden mb-6">
              Services
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Adeegyada</span>{" "}
              <span className="text-gradient-golden">Aan Bixiyo</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Waxaan bixiyaa adeegyo kala duwan oo ku aadan technology, management, iyo digitalization.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group glass-card p-8 rounded-2xl hover:border-golden/50 transition-all duration-500 hover:golden-glow"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-golden/10 border border-golden/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-golden" />
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {service.titleSo}
                </h3>
                <p className="text-sm text-golden mb-4">{service.title}</p>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-golden" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center glass-card p-12 rounded-2xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              <span className="text-foreground">Ma u baahan tahay</span>{" "}
              <span className="text-gradient-golden">caawimo?</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Haddii aad u baahan tahay adeegyadayda, ila soo xiriir si aan kuu caawiyo.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-golden text-secondary-foreground font-semibold rounded-full hover:bg-golden-light transition-all duration-300 golden-glow"
            >
              Ila Soo Xiriir
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Services;
