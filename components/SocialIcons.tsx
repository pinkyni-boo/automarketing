import { Facebook, Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';

const LINKS = [
  { href: 'https://facebook.com/martech.aimarkee', label: 'Facebook', Icon: Facebook },
  { href: 'https://instagram.com/martech.aimarkee', label: 'Instagram', Icon: Instagram },
  { href: 'https://twitter.com/martech_aimk', label: 'Twitter / X', Icon: Twitter },
  { href: 'https://linkedin.com/company/martech-aimarkee', label: 'LinkedIn', Icon: Linkedin },
  { href: 'https://youtube.com/@martech.aimarkee', label: 'YouTube', Icon: Youtube },
];

export default function SocialIcons({ className = '' }: { className?: string }) {
  return (
    <div className={`social-icons ${className}`}>
      {LINKS.map(({ href, label, Icon }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
          <Icon size={16} />
        </a>
      ))}
    </div>
  );
}
