import { ExternalLink, Calendar, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projects = [
  {
    id: 1,
    title: "Digital Government Platform",
    titleSo: "Barnaamijka Dawladda Dhijitaalka",
    category: "Technology",
    year: "2024",
    description: "Abuurista nidaam dhijitaal ah oo loogu talagalay adeegyada dawladda si ay shacabka u helaan si fudud.",
    tags: ["E-Government", "Digital Services", "Cloud"],
    featured: true,
  },
  {
    id: 2,
    title: "Asset Management System",
    titleSo: "Nidaamka Maareynta Hantida",
    category: "Asset Management",
    year: "2023",
    description: "Nidaam casri ah oo lagu maareeyo hantida shirkadaha waaweyn iyo hay'adaha.",
    tags: ["Asset Tracking", "Analytics", "Reporting"],
    featured: true,
  },
  {
    id: 3,
    title: "Enterprise Digitalization",
    titleSo: "Dhijitaalka Shirkadaha",
    category: "Digitalization",
    year: "2023",
    description: "U beddelka habab dhaqameed oo shaqo ah kuwo dhijitaal ah oo wax ku ool ah.",
    tags: ["Automation", "Workflow", "Integration"],
    featured: true,
  },
  {
    id: 4,
    title: "Smart Infrastructure Project",
    titleSo: "Mashruuca Kaabayaasha Casriga",
    category: "Technology",
    year: "2022",
    description: "Hirgelinta technology-ga casriga ah ee kaabayaasha magaalada.",
    tags: ["IoT", "Smart City", "Infrastructure"],
    featured: false,
  },
  {
    id: 5,
    title: "Financial Management Platform",
    titleSo: "Barnaamijka Maareynta Dhaqaalaha",
    category: "Management",
    year: "2022",
    description: "Nidaam lagu maareeyo dhaqaalaha iyo maalgelinta shirkadaha.",
    tags: ["Finance", "Budgeting", "Forecasting"],
    featured: false,
  },
  {
    id: 6,
    title: "Training & Development Program",
    titleSo: "Barnaamijka Tababarka",
    category: "Leadership",
    year: "2021",
    description: "Barnaamij tababar ah oo loogu talagalay hoggaamiyeyaasha mustaqbalka.",
    tags: ["Training", "Leadership", "Development"],
    featured: false,
  },
];

const categories = ["All", "Technology", "Asset Management", "Digitalization", "Management", "Leadership"];

const Portfolio = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-golden/5 to-transparent" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-somali-blue/10 rounded-full blur-3xl animate-float" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 text-sm font-medium bg-golden/10 border border-golden/30 rounded-full text-golden mb-6">
              Portfolio
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Mashruucyadayda</span>{" "}
              <span className="text-gradient-golden">& Guulahaygaa</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Halkan waxaad ka arki kartaa mashruucyadii aan ku guuleystay iyo shaqooyinka aan qabtay.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-border bg-card/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Mashruuc" },
              { number: "10+", label: "Sanadood Khibrad" },
              { number: "30+", label: "Macmiil" },
              { number: "100%", label: "Qanacsanaan" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient-golden mb-2">
                  {stat.number}
                </div>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">
              <span className="text-foreground">Mashruucyada</span>{" "}
              <span className="text-gradient-golden">Muhiimka ah</span>
            </h2>
            <p className="text-muted-foreground">Mashruucyadayda ugu weyn ee aan ku guuleystay</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <div
                  key={project.id}
                  className="group glass-card rounded-2xl overflow-hidden hover:border-golden/50 transition-all duration-500 hover:golden-glow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Project Header */}
                  <div className="h-48 bg-gradient-to-br from-golden/20 via-somali-blue/10 to-card flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--golden)/0.2),transparent_70%)]" />
                    <span className="font-display text-6xl font-bold text-golden/20 group-hover:scale-110 transition-transform duration-500">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    {/* Category & Year */}
                    <div className="flex items-center gap-4 mb-4">
                      <span className="flex items-center gap-1 text-xs text-golden">
                        <Tag className="w-3 h-3" />
                        {project.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {project.year}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                      {project.titleSo}
                    </h3>
                    <p className="text-sm text-golden mb-4">{project.title}</p>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs bg-background border border-border rounded-full text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">
              <span className="text-foreground">Mashruucyada</span>{" "}
              <span className="text-gradient-golden">Kale</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((p) => !p.featured)
              .map((project) => (
                <div
                  key={project.id}
                  className="group p-6 glass-card rounded-xl hover:border-golden/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="px-3 py-1 text-xs bg-golden/10 border border-golden/30 rounded-full text-golden">
                      {project.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{project.year}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1 group-hover:text-golden transition-colors">
                    {project.titleSo}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs bg-background/50 rounded text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center glass-card p-12 rounded-2xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              <span className="text-foreground">Ma rabtaa inaad</span>{" "}
              <span className="text-gradient-golden">la shaqeyso?</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Haddii aad hayso mashruuc cusub oo aad rabto inaan kaa caawiyo, ila soo xiriir.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-golden text-secondary-foreground font-semibold rounded-full hover:bg-golden-light transition-all duration-300 golden-glow"
            >
              Ila Soo Xiriir
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Portfolio;
