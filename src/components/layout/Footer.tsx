import Link from 'next/link';
import { Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="/about" className="hover:text-accent transition-colors">About Us</Link>
          <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
          <Link href="/porcelain-rule" className="hover:text-accent transition-colors">The Porcelain Rule</Link>
        </div>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-accent transition-colors">
            <Twitter size={24} />
          </a>
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-accent transition-colors">
            <Instagram size={24} />
          </a>
          <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-accent transition-colors">
            <Youtube size={24} />
          </a>
          <a href="https://tiktok.com/@yourprofile" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:text-accent transition-colors">
            <span className="text-sm font-medium">TikTok</span>
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Restroom Reviews. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
