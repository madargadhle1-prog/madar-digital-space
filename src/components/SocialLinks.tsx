import { MessageCircle, Twitter, Facebook, Linkedin } from "lucide-react";

const socials = [
  {
    name: "WhatsApp",
    url: "https://wa.link/ub7bb5",
    icon: MessageCircle,
    color: "hover:text-green-500",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@mada_maxamuud?_r=1&_t=ZM-92TybLgE0gF",
    icon: () => (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
      </svg>
    ),
    color: "hover:text-pink-500",
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/madar_official",
    icon: Twitter,
    color: "hover:text-somali-blue",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/share/1BaYSvZb6p/",
    icon: Facebook,
    color: "hover:text-blue-500",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/madar-mahamoud",
    icon: Linkedin,
    color: "hover:text-blue-400",
  },
];

const SocialLinks = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      {socials.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full bg-card/50 border border-border hover:border-golden/50 text-muted-foreground ${social.color} transition-all duration-300 hover:scale-110 hover:golden-glow`}
            title={social.name}
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
