import { Github, Linkedin, Mail, MessageCircle, FileText } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
}

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: "Reach out directly",
    href: "mailto:anaszulkifli.mj@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "anas-zulkifli-mohd-jeffry",
    href: "https://www.linkedin.com/in/anas-zulkifli-mohd-jeffry",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "Zer0-01",
    href: "https://github.com/Zer0-01",
    icon: Github,
  },
  {
    label: "WhatsApp",
    value: "Quick response channel",
    href: "https://wa.me/601154066082",
    icon: MessageCircle,
  },
  {
    label: "Resume",
    value: "View current CV",
    href: "https://docs.google.com/document/d/1Ft2fg1_lMUqF9WITtQ9AK5HUFbL3ZzJd/edit?usp=drive_link&ouid=113577497045470240069&rtpof=true&sd=true",
    icon: FileText,
  },
];
