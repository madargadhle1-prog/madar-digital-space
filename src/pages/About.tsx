import { Briefcase, GraduationCap, Award, Target } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";

const skills = [
  "Technology Management",
  "Digital Transformation",
  "Asset Management",
  "Project Leadership",
  "Strategic Planning",
  "Team Development",
];

const timeline = [
  {
    year: "2020 - Present",
    title: "Chief Engineer",
    description: "Leading technology and digitalization initiatives across multiple sectors.",
    icon: Briefcase,
  },
  {
    year: "2018 - 2020",
    title: "Senior Manager",
    description: "Managed asset management and modernization projects.",
    icon: Target,
  },
  {
    year: "2015 - 2018",
    title: "Technology Consultant",
    description: "Provided strategic consulting for digital solutions.",
    icon: Award,
  },
  {
    year: "2012 - 2015",
    title: "Engineering Graduate",
    description: "Completed engineering studies with focus on technology.",
    icon: GraduationCap,
  },
];

const About = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-golden/5 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 text-sm font-medium bg-golden/10 border border-golden/30 rounded-full text-golden mb-6">
              About Me
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Ku soo dhawoow</span>{" "}
              <span className="text-gradient-golden">Taariikhda</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Waxaan ahay injineer iyo maamule xirfad leh oo leh khibrad dheer oo ku aadan technology, digitalization, iyo management.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border border-golden/30 golden-glow">
                <img
                  src={heroBg}
                  alt="Madar Mahamud"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-golden/20 rounded-full blur-3xl" />
            </div>

            {/* Content */}
            <div>
              <h2 className="font-display text-3xl font-bold mb-6 text-foreground">
                Madar Mahamud
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Waxaan ahay C Eng Madar, injineer xirfad leh oo ku takhasusay technology, digitalization, management, iyo asset management. Khibradahayga waxay ka kooban tahay sanaddo badan oo la shaqaynta shirkadaha iyo hay'adaha kala duwan.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Hadafkaygu waa in aan keeno xalal casri ah oo u adeega bulshada iyo ganacsiyada, anigoo isticmaalaya technology-ga ugu dambeeyay iyo aragtiyada maamulka casriga ah.
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm bg-card border border-border rounded-full text-muted-foreground hover:border-golden/50 hover:text-golden transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              <span className="text-foreground">Taariikhda</span>{" "}
              <span className="text-gradient-golden">Shaqada</span>
            </h2>
            <p className="text-muted-foreground">Safarka xirfadda iyo horumarka</p>
          </div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-12 pb-12 last:pb-0">
                {/* Line */}
                {index !== timeline.length - 1 && (
                  <div className="absolute left-5 top-12 w-0.5 h-full bg-border" />
                )}
                
                {/* Icon */}
                <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-golden/10 border border-golden/30 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-golden" />
                </div>

                {/* Content */}
                <div className="glass-card p-6 rounded-xl">
                  <span className="text-sm text-golden font-medium">{item.year}</span>
                  <h3 className="font-display text-xl font-semibold text-foreground mt-1 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
