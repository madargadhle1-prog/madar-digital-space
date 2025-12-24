import { Link } from "react-router-dom";
import { ArrowRight, Tag, Calendar } from "lucide-react";

const featuredProjects = [
  {
    id: 1,
    title: "Digital Government Platform",
    titleSo: "Barnaamijka Dawladda Dhijitaalka",
    category: "Technology",
    year: "2024",
  },
  {
    id: 2,
    title: "Asset Management System",
    titleSo: "Nidaamka Maareynta Hantida",
    category: "Asset Management",
    year: "2023",
  },
  {
    id: 3,
    title: "Enterprise Digitalization",
    titleSo: "Dhijitaalka Shirkadaha",
    category: "Digitalization",
    year: "2023",
  },
];

const PortfolioPreview = () => {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="inline-block px-4 py-2 text-sm font-medium bg-golden/10 border border-golden/30 rounded-full text-golden mb-4">
              Portfolio
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              <span className="text-foreground">Mashruucyadayda</span>{" "}
              <span className="text-gradient-golden">Muhiimka ah</span>
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-golden hover:text-golden-light transition-colors group"
          >
            Arag Dhammaantood
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <Link
              key={project.id}
              to="/portfolio"
              className="group glass-card rounded-2xl overflow-hidden hover:border-golden/50 transition-all duration-500 hover:golden-glow"
            >
              {/* Project Visual */}
              <div className="h-40 bg-gradient-to-br from-golden/20 via-somali-blue/10 to-card flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--golden)/0.2),transparent_70%)]" />
                <span className="font-display text-5xl font-bold text-golden/20 group-hover:scale-110 transition-transform duration-500">
                  0{index + 1}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center gap-1 text-xs text-golden">
                    <Tag className="w-3 h-3" />
                    {project.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {project.year}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1 group-hover:text-golden transition-colors">
                  {project.titleSo}
                </h3>
                <p className="text-sm text-muted-foreground">{project.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
