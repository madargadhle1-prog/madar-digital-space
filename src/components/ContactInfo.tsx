import { Phone, Mail } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-muted-foreground">
      <div className="flex items-center gap-2">
        <Phone className="w-4 h-4 text-golden" />
        <a href="tel:+252610829707" className="hover:text-golden transition-colors">
          +252 610 829 707
        </a>
        <span className="text-border">|</span>
        <a href="tel:+252619079910" className="hover:text-golden transition-colors">
          +252 619 079 910
        </a>
      </div>
      <div className="flex items-center gap-2">
        <Mail className="w-4 h-4 text-golden" />
        <a href="mailto:madargadhle1@gmail.com" className="hover:text-golden transition-colors">
          madargadhle1@gmail.com
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
