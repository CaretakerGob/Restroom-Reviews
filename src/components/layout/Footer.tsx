
import Link from 'next/link';
import { Twitter, Instagram, Youtube, HelpCircle, Shield, FileText, Home, Info, Accessibility, DollarSign, Languages } from 'lucide-react';

// Placeholder for TikTok icon
const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.73-.21.52-.3.97-.28 1.5.05.92.48 1.86 1.17 2.55.88.88 2.13 1.31 3.31 1.11.09-1.54.03-3.08.02-4.61h2.08Z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8 mt-12">
      <div className="container mx-auto px-4 text-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-6 text-sm">
          <Link href="/" className="hover:text-accent transition-colors flex items-center justify-center gap-1"><Home size={16}/>Home</Link>
          <Link href="/about" className="hover:text-accent transition-colors flex items-center justify-center gap-1"><Info size={16}/>About Us</Link>
          <Link href="/contact" className="hover:text-accent transition-colors flex items-center justify-center gap-1">Contact</Link>
          <Link href="/porcelain-rule" className="hover:text-accent transition-colors flex items-center justify-center gap-1"><Shield size={16}/>Proper Porcelain Policy</Link>
          <Link href="/anonymous-tips" className="hover:text-accent transition-colors flex items-center justify-center gap-1"><HelpCircle size={16}/>Anonymous Tips</Link>
          <Link href="/privacy-policy" className="hover:text-accent transition-colors flex items-center justify-center gap-1"><FileText size={16}/>Privacy Policy</Link>
          <Link href="/terms-of-use" className="hover:text-accent transition-colors flex items-center justify-center gap-1"><FileText size={16}/>Terms of Use</Link>
          <Link href="/accessibility-statement" className="hover:text-accent transition-colors flex items-center justify-center gap-1"><Accessibility size={16}/>Accessibility</Link>
          <Link href="/support-us" className="hover:text-accent transition-colors flex items-center justify-center gap-1"><DollarSign size={16}/>Support Us</Link>
        </div>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-accent transition-colors">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-accent transition-colors">
            <Instagram size={20} />
          </a>
          <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-accent transition-colors">
            <Youtube size={20} />
          </a>
          <a href="https://tiktok.com/@yourprofile" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:text-accent transition-colors">
            <TikTokIcon />
          </a>
        </div>
        <p className="text-xs text-muted-foreground mb-2">
          Disclaimer: Restroom Reviews relies on user-generated content. Experiences may vary. Always prioritize your safety and discretion.
        </p>
        <p className="text-xs text-muted-foreground mb-2">
          <Languages size={14} className="inline mr-1" /> Language: English (More languages coming soon!)
        </p>
        <p className="text-sm">&copy; {new Date().getFullYear()} Restroom Reviews. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
